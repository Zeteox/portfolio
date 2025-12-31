"use client";

import { useEffect, useRef, useState } from "react";

type Bar = {
  left: number;
  height: number;
};

export function Glitch() {
  const [bars, setBars] = useState<Bar[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const barWidth = 24;

    const minHeight = 4;
    const maxHeight = 240;
    const step = 4;

    const generateBars = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const count = Math.ceil(width / barWidth);

      const maxSteps = Math.floor(maxHeight / step);
      const minSteps = Math.ceil(minHeight / step);

      const newBars: Bar[] = Array.from({ length: count }, (_, i) => ({
        left: i * barWidth,
        height:
          (Math.floor(
            Math.random() * (maxSteps - minSteps + 1)
          ) + minSteps) * step,
      }));

      setBars(newBars);
    };

    generateBars();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden z-20"
    >
      {bars.map((bar, i) => (
        <span
          key={i}
          className="absolute bottom-0 w-6 bg-background-2"
          style={{
            left: `${bar.left}px`,
            height: `${bar.height}px`,
          }}
        />
      ))}
    </div>
  );
}
