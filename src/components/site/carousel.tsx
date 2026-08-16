"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const EDGE_TOLERANCE_PX = 4;
const AUTOPLAY_MS = 4500;

export function Carousel({ items }: { items: { key: string; content: ReactNode }[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateEdges = () => {
      setAtStart(track.scrollLeft <= EDGE_TOLERANCE_PX);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - EDGE_TOLERANCE_PX);
    };

    updateEdges();
    track.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      track.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [items.length]);

  const scrollByOneCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector<HTMLElement>(".pt-carousel-item");
    const gap = 24;
    const step = item ? item.getBoundingClientRect().width + gap : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  // Auto-advance right-to-left like the hero slider, but pause while the
  // visitor's pointer is over the carousel so autoplay doesn't fight a
  // manual click or a mid-scroll swipe. Loops back to the start at the end
  // instead of stalling there.
  useEffect(() => {
    if (items.length <= 1 || paused) return;
    const timer = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - EDGE_TOLERANCE_PX;
      if (nearEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByOneCard(1);
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [items.length, paused, scrollByOneCard]);

  if (items.length === 0) return null;

  return (
    <div
      className="pt-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pt-carousel-track" ref={trackRef}>
        {items.map((item) => (
          <div key={item.key} className="pt-carousel-item">
            {item.content}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="pt-carousel-controls">
          <button
            type="button"
            aria-label="Previous"
            className="pt-carousel-arrow"
            disabled={atStart}
            onClick={() => scrollByOneCard(-1)}
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="pt-carousel-arrow pt-carousel-arrow-primary"
            disabled={atEnd}
            onClick={() => scrollByOneCard(1)}
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      )}
    </div>
  );
}
