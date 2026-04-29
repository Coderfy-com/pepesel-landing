"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

const tagKeys = [
  "language",
  "theme",
  "catalog",
  "geo",
  "role",
  "analytics",
] as const;

const tagColors = [
  "from-[#E53935] to-[#FF6D00]",
  "from-[#1A1A1A] to-[#333]",
  "from-[#FF6D00] to-[#FFB300]",
  "from-[#E53935] to-[#B71C1C]",
  "from-[#333] to-[#555]",
  "from-[#D32F2F] to-[#E53935]",
];

export function AdaptabilitySection() {
  const t = useTranslations("Adaptability");

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8">
            <ScrollReveal animation="fadeInUp">
              {/* Logo badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="px-3 py-1.5 border-2 border-[#E53935] rounded-md inline-flex items-center gap-2">
                  <span className="text-[#E53935] font-bold text-sm tracking-widest">
                    pepsell
                  </span>
                  <svg width="16" height="10" viewBox="0 0 24 16">
                    <path
                      d="M2 12L8 4L12 8L22 2"
                      stroke="#E53935"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] leading-tight">
                {t("title")}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={0.2}>
              <p className="text-xl md:text-2xl text-[#0A0A0A]/60 max-w-lg">
                {t("subtitle")}
              </p>
            </ScrollReveal>

            {/* Tags */}
            <StaggerContainer
              className="flex flex-wrap gap-3 mt-4"
              staggerDelay={0.06}
            >
              {tagKeys.map((key, i) => (
                <StaggerItem key={key}>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${tagColors[i]} text-white text-sm font-semibold shadow-lg cursor-default`}
                  >
                    {t(`tags.${key}`)}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Phone mockup */}
          <ScrollReveal animation="slideInRight" delay={0.3}>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-[280px] md:w-[300px] h-[560px] md:h-[600px] bg-white rounded-[3rem] border border-gray-200 shadow-2xl overflow-hidden"
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-3 pb-2 bg-white">
                  <span className="text-gray-600 text-xs font-medium">
                    17:00
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 rounded-sm bg-gray-300" />
                    <div className="w-4 h-2 rounded-sm bg-gray-300" />
                    <div className="w-6 h-3 rounded-sm bg-gray-400" />
                  </div>
                </div>

                {/* App content */}
                <div className="flex flex-col items-center px-6 py-6">
                  <div className="w-full py-6 flex items-center justify-center">
                    <div className="px-4 py-2 border-2 border-[#E53935] rounded-lg">
                      <span className="text-[#E53935] font-bold text-lg tracking-wider">
                        pepsell
                      </span>
                      <svg
                        width="20"
                        height="12"
                        viewBox="0 0 24 16"
                        className="inline-block ml-1"
                      >
                        <path
                          d="M2 12L8 4L12 8L22 2"
                          stroke="#E53935"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Feature list mockup */}
                  <div className="w-full flex flex-col gap-3 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                      >
                        <div
                          className="w-8 h-8 rounded-lg shrink-0"
                          style={{
                            background:
                              i % 2 === 0
                                ? "linear-gradient(135deg, #E53935, #FF6D00)"
                                : "linear-gradient(135deg, #333, #555)",
                          }}
                        />
                        <div className="flex-1 flex flex-col gap-1">
                          <div className="h-2 w-3/4 rounded bg-gray-200" />
                          <div className="h-1.5 w-1/2 rounded bg-gray-100" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-gray-200" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
