// components/ui/CircleProgress.tsx
"use client";

import React, { useEffect, useMemo } from "react";

type CircleProgressProps = {
  value: number;
  max: number;
  label?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  animateOnMount?: boolean; // NEW
  durationMs?: number;      // NEW
};

export default function CircleProgress({
  value,
  max,
  label = "g",
  size = 92,
  strokeWidth = 10,
  className = "",
  animateOnMount = true,
  durationMs = 800,
}: CircleProgressProps) {
  const clampedMax = Math.max(1, max);
  const clampedValue = Math.min(Math.max(0, value), clampedMax);

  const progress = clampedValue / clampedMax; // 0..1
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;

  const finalOffset = useMemo(() => c * (1 - progress), [c, progress]);

  const progressCircleRef = React.useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const el = progressCircleRef.current;
    if (!el) return;

    const setOffset = (offset: number) => {
      el.setAttribute("stroke-dashoffset", String(offset));
    };

    if (!animateOnMount) {
      setOffset(finalOffset);
      return;
    }
    // Start from empty each time it appears (or value changes)
    setOffset(c);
    const id = requestAnimationFrame(() => setOffset(finalOffset));
    return () => cancelAnimationFrame(id);
  }, [animateOnMount, c, finalOffset]);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="block">
        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-black/10 dark:text-white/15"
          strokeWidth={strokeWidth}
        />
        {/* progress */}
        <circle
          ref={progressCircleRef}
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-[#C9A86A]"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={animateOnMount ? c : finalOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            transition: `stroke-dashoffset ${durationMs}ms ease-out`,
          }}
        />
      </svg>

      <div className="absolute text-center leading-none">
        <div className="text-lg font-semibold text-neutral-900 dark:text-white">
          {clampedValue}
          <span className="ml-0.5 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
