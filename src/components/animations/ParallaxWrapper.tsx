"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxWrapperProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxWrapper({
  children,
  className,
  speed = 0.3,
  direction = "up",
}: ParallaxWrapperProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * speed * multiplier, -100 * speed * multiplier]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
