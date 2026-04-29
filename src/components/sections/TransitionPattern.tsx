"use client";

import { motion } from "framer-motion";

export function TransitionPattern() {
  return (
    <section className="relative py-8 bg-[#0A0A0A] overflow-hidden">
      {/* Infinite scrolling logos */}
      <div className="flex gap-0 animate-marquee">
        {[...Array(3)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex gap-0 shrink-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 px-8 py-4 shrink-0"
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 border border-white/20 rounded-md">
                    <span className="text-white/40 font-bold text-sm tracking-widest whitespace-nowrap">
                      pepsell
                    </span>
                  </div>
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 24 16"
                    className="shrink-0"
                  >
                    <path
                      d="M2 12L8 4L12 8L22 2"
                      stroke={i % 2 === 0 ? "#E53935" : "#FF6D00"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
