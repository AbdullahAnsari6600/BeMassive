import { useEffect, useState } from "react";

const TARGET = new Date(Date.now() + 1000 * 60 * 60 * 24 * 45).getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);

  const items = [
    { label: "Days", value: t.d },
    { label: "Hours", value: t.h },
    { label: "Minutes", value: t.m },
    { label: "Seconds", value: t.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {items.map((it) => (
        <div
          key={it.label}
          className="glass-strong rounded-xl px-3 py-5 sm:px-6 sm:py-8 text-center"
        >
          <div className="font-display text-4xl sm:text-6xl text-gradient-gold tabular-nums">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
