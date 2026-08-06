"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "left" | "right" | "up";

const hiddenTransform: Record<Direction, string> = {
  left: "-translate-x-12 sm:-translate-x-20",
  right: "translate-x-12 sm:translate-x-20",
  up: "translate-y-10",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${hiddenTransform[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
