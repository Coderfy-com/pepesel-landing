"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: keyof typeof animations;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  margin?: string;
}

export function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  once = true,
  className,
  margin = "-80px",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={animations[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
