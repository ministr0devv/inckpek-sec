"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

const springConfig = { type: "spring" as const, damping: 30, stiffness: 100 };

export function ScrollAnimate({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 32,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initial = { opacity: 0, ...directionMap[direction] };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ ...springConfig, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
