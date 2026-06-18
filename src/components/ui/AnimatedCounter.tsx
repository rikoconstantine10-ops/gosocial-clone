"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  target: string;
  label: string;
}

export function AnimatedCounter({ target, label }: Props) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const numMatch = target.replace(/\./g, "").match(/\d+/);
          if (!numMatch) { setDisplay(target); return; }
          const end = parseInt(numMatch[0]);
          const suffix = target.replace(/[\d.]/g, "");
          const duration = 1500;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * end);
            setDisplay(current.toLocaleString("id-ID") + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="glass shimmer-card rounded-2xl p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2" style={{ fontFamily: "var(--font-display)" }}>{display}</div>
      <div className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>{label}</div>
    </div>
  );
}
