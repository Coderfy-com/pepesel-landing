"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  StaggerContainer,
  StaggerItem,
  ParallaxWrapper,
} from "@/components/animations";

export function HeroSection() {
  const t = useTranslations("Hero");

  const titleWords = t("title").split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal stripes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 0.15 }}
            transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
            className="absolute w-16 md:w-24 rounded-full"
            style={{
              height: "140%",
              background:
                i % 3 === 0
                  ? "linear-gradient(180deg, #E53935, #D32F2F)"
                  : i % 3 === 1
                    ? "linear-gradient(180deg, #FF6D00, #E53935)"
                    : "linear-gradient(180deg, #666, #333)",
              left: `${10 + i * 16}%`,
              top: "-20%",
              transform: `rotate(${-15 + i * 5}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <StaggerContainer className="flex flex-col gap-6">
            {/* Badges */}
            <StaggerItem>
              <div className="flex flex-wrap gap-3">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#E53935] to-[#FF6D00] text-white text-sm font-semibold shadow-lg shadow-red-500/20"
                >
                  📈 {t("badge1")}
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold border border-white/20"
                >
                  💰 {t("badge2")}
                </motion.span>
              </div>
            </StaggerItem>

            {/* Title */}
            <StaggerItem>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  className="bg-gradient-to-r from-[#E53935] to-[#FF6D00] bg-clip-text text-transparent"
                >
                  {t("titleHighlight")}
                </motion.span>
              </h1>
            </StaggerItem>

            {/* Subtitle */}
            <StaggerItem>
              <p className="text-lg md:text-xl text-white/60 max-w-lg">
                {t("subtitle")}
              </p>
            </StaggerItem>

            {/* CTA Button */}
            <StaggerItem>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E53935] to-[#D32F2F] text-white font-semibold text-lg shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-shadow duration-300 w-fit"
              >
                Get Started
              </motion.button>
            </StaggerItem>
          </StaggerContainer>

          {/* Right: Phone Mockup */}
          <ParallaxWrapper speed={0.2} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] rounded-[3rem] border-2 border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-3 pb-2">
                  <span className="text-white/50 text-xs font-medium">
                    17:00
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 rounded-sm bg-white/30" />
                    <div className="w-4 h-2 rounded-sm bg-white/30" />
                    <div className="w-6 h-3 rounded-sm bg-white/40" />
                  </div>
                </div>

                {/* App content */}
                <div className="flex flex-col items-center justify-center flex-1 px-8 py-12">
                  {/* Logo inside phone */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="w-full py-8 flex items-center justify-center"
                  >
                    <div className="px-6 py-3 border-2 border-[#E53935] rounded-lg">
                      <span className="text-[#E53935] font-bold text-2xl tracking-wider">
                        pepsell
                      </span>
                      <svg
                        width="24"
                        height="16"
                        viewBox="0 0 24 16"
                        className="inline-block ml-2"
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
                  </motion.div>

                  {/* Login form mockup */}
                  <div className="w-full flex flex-col gap-4 mt-6">
                    <div className="text-center text-white/80 font-semibold text-lg mb-2">
                      Login
                    </div>
                    <div className="flex gap-2 justify-center">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                          className="w-10 h-12 rounded-lg bg-white/10 border border-white/20"
                        />
                      ))}
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.6, duration: 0.4 }}
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-[#E53935]/60 to-[#E53935] mt-2"
                    />
                    <p className="text-center text-white/40 text-sm mt-1">
                      Registration
                    </p>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-white/20" />
              </div>

              {/* Decorative arrows */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="absolute -bottom-8 -left-16 text-[#E53935]"
              >
                <path
                  d="M20 100L60 20L80 60L110 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </motion.svg>
            </motion.div>
          </ParallaxWrapper>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
