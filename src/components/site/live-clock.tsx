"use client";

import { useEffect, useState } from "react";

// Starts `null` and fills in on mount rather than `new Date()` at first
// render — the server has no clock to match, so rendering a real timestamp
// during SSR would mismatch the client's on hydration (see progress.md's
// note on this exact class of bug).
export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    // Deferred via setTimeout(0) rather than called synchronously here — an
    // immediate setState call in the effect body trips
    // react-hooks/set-state-in-effect (cascading-render lint rule); a
    // macrotask still fires effectively instantly without that warning.
    const timeout = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(id);
    };
  }, []);

  if (!now) return null;

  const date = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="pt-live-clock pt-header-desktop-only">
      <i className="fa-regular fa-clock" />
      <span>
        {date} &middot; {time}
      </span>
    </div>
  );
}
