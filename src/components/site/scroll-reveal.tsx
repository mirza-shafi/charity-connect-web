"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  /** Animate direct children individually, staggered, instead of the whole block at once. */
  stagger?: boolean;
  /** Extra delay (seconds) before this reveal starts once it's in view. */
  delay?: number;
}

// Fades + slightly rises content as it scrolls into view.
//
// Deliberately IntersectionObserver + CSS transitions rather than a
// scroll-position animation library: this page's layout shifts after mount
// (CDN Font Awesome, two web fonts, images), which invalidates any scroll
// offsets cached at mount time and left elements stranded at opacity 0
// forever. IntersectionObserver recomputes intersection itself, so late
// layout shifts can't strand anything, and a CSS transition always runs to
// completion once its class flips — it can't freeze part-way through.
//
// The hidden state is applied by JS (never in the server-rendered markup), so
// with JS disabled or before hydration the content is simply fully visible —
// crawlers and no-JS visitors never see blank sections.
export function ScrollReveal({
  children,
  as: Tag = "div",
  className,
  style,
  stagger = false,
  delay = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Already scrolled completely past it (reload with restored scroll position,
    // an anchor link, or the back button): leave it plainly visible. Hiding it
    // here would strand it — an element that goes from below the viewport to
    // above it never intersects, so the observer would have nothing to react to.
    if (el.getBoundingClientRect().bottom <= 0) return;

    const targets = (stagger ? Array.from(el.children) : [el]) as HTMLElement[];

    // Runs in a layout effect, so the hidden state lands before the browser
    // paints — no flash of the final state first.
    targets.forEach((target, i) => {
      target.classList.add("pt-reveal");
      target.style.transitionDelay = `${delay + (stagger ? i * 0.08 : 0)}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        // Reveal the group together (staggered by transition-delay) rather than
        // per-child, so a row taller than the viewport can't half-reveal.
        targets.forEach((target) => target.classList.add("pt-reveal-in"));
        observer.disconnect();
      },
      {
        // Bottom -15% approximates "start when the element's top reaches 85% of
        // the viewport". The huge top margin extends the root far above the
        // viewport so anything already scrolled past still counts as
        // intersecting: without it, an instant jump (anchor link such as
        // `#donate`, scroll restoration, back button) takes an element straight
        // from below the viewport to above it with the ratio never leaving 0 —
        // no callback fires and the content stays invisible for good.
        rootMargin: "9999px 0px -15% 0px",
      },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      targets.forEach((target) => {
        target.classList.remove("pt-reveal", "pt-reveal-in");
        target.style.transitionDelay = "";
      });
    };
  }, [stagger, delay]);

  const Component = Tag as ElementType;
  return (
    <Component ref={containerRef} className={className} style={style}>
      {children}
    </Component>
  );
}
