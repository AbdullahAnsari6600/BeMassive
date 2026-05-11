import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block transition-transform duration-100"
      style={{
        background: `radial-gradient(180px circle at ${pos.x}px ${pos.y}px, rgba(212,175,55,0.06), transparent 70%)`,
      }}
    />
  );
}
