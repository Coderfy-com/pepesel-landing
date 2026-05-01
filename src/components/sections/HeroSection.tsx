"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/*
  ANIMATION PHASES (matching Figma prototype, node IDs in comments):
  Phase 1 — "dot"      (0.0s):  White bg. Tiny red dot appears.
  Phase 2 — "capsule"  (0.1s):  Red capsule expands horizontally.
  Phase 3 — "logo"     (1.0s):  pepsell 2.0 logo fades in inside capsule.
  Phase 4 — "expand"   (2.0s):  Capsule expands to full red screen.
  Phase 5 — "fade-logo"(3.0s):  Center logo fades out.
  Phase 6 — "centered" (3.5s):  [Node 26006-4359] Red full-screen + hero-bg pattern.
                                  "Welcome to" + "pepsell 2.0" CENTERED. Header visible.
  Phase 7 — "welcome"  (5.5s):  [Node 26006-4356] Content shifts LEFT. Text animates in.
  Phase 8 — "final"    (7.0s):  [Node 26006-4361] Dark bg (#111113). Phones + badges pop in.
*/

export function HeroSection() {
  const t = useTranslations("Hero");
  const [phase, setPhase] = useState<
    "dot" | "capsule" | "logo" | "expand" | "fade-logo" | "centered" | "welcome" | "final"
  >("dot");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("capsule"),   100),
      setTimeout(() => setPhase("logo"),      1000),
      setTimeout(() => setPhase("expand"),    2000),
      setTimeout(() => setPhase("fade-logo"), 3000),
      setTimeout(() => setPhase("centered"),  3500),
      setTimeout(() => setPhase("welcome"),   5500),
      setTimeout(() => setPhase("final"),     7000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const isExpanded    = ["expand", "fade-logo", "centered", "welcome", "final"].includes(phase);
  const showCenterLogo= phase === "logo" || phase === "expand";
  const showCentered  = phase === "centered";
  const showHeroContent = phase === "welcome" || phase === "final";
  const isFinalDark   = phase === "final";

  return (
    <section className="relative w-full h-full overflow-hidden bg-white font-montserrat">

      {/* =============================================
          BACKGROUND PATTERN
          Appears in "centered" phase (red) and stays for "welcome" + "final"
          In "final" phase the bg color transitions to #111113
      ============================================= */}
      <AnimatePresence>
        {(showCentered || showHeroContent) && (
          <motion.div
            key="hero-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-[3]"
          >
            <Image
              src="/images/hero/hero-bg.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =============================================
          ANIMATED RED/DARK BACKGROUND SHAPE
          Starts as dot → capsule → full screen → dark
      ============================================= */}
      <motion.div
        animate={{
          backgroundColor: isFinalDark ? "#111113" : "#980000",
          width:  phase === "dot" ? "0px" : isExpanded ? "100vw" : "min(1553px, 100vw)",
          height: phase === "dot" ? "0px" : isExpanded ? "100vh" : "min(267px, 30vw)",
          borderRadius: isExpanded ? "0px" : "9999px",
        }}
        transition={{
          backgroundColor: { duration: 1.2, ease: "easeInOut" },
          width:  { duration: phase === "dot" ? 0.01 : phase === "capsule" ? 0.9 : 0.8, ease: [0.76, 0, 0.24, 1] },
          height: { duration: phase === "expand" ? 0.9 : 0.01, ease: [0.76, 0, 0.24, 1] },
          borderRadius: { duration: 0.6, ease: "easeOut" },
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden z-[1]"
      >
        {/* CENTERED LOGO inside capsule (phases: logo, expand) */}
        <AnimatePresence>
          {(showCenterLogo || phase === "fade-logo") && (
            <motion.div
              key="capsule-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: showCenterLogo ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 md:gap-8 absolute"
            >
              <div className="relative w-[180px] h-[24px] md:w-[540px] md:h-[66px] lg:w-[810px] lg:h-[99px] xl:w-[1080px] xl:h-[132px]">
                <Image src="/pepsell-logo.svg" alt="PEPSELL" fill className="object-contain" priority />
              </div>
              <span className="text-white font-normal leading-none text-[32px] md:text-[80px] lg:text-[120px] xl:text-[150px] -translate-y-1 lg:-translate-y-2 xl:-translate-y-4">
                2.0
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* =============================================
          PHASE 6 — "centered" (Node 26006-4359)
          Red full-screen. "Welcome to" + "pepsell 2.0" CENTERED.
          No phones visible (opacity: 0 in Figma).
      ============================================= */}
      <AnimatePresence>
        {showCentered && (
          <motion.div
            key="centered-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 z-[4] flex flex-col items-center justify-center"
          >
            {/* "Welcome to" */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white font-medium text-[40px] md:text-[64px] lg:text-[96px] leading-[1.3] mb-4 lg:mb-6"
            >
              {t("title")}
            </motion.p>

            {/* pepsell 2.0 logo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center justify-center gap-4 md:gap-8"
            >
              <div className="relative w-[280px] h-[34px] md:w-[600px] md:h-[74px] lg:w-[880px] lg:h-[108px] xl:w-[1080px] xl:h-[132px]">
                <Image src="/pepsell-logo.svg" alt="PEPSELL" fill className="object-contain" priority />
              </div>
              <span className="text-white font-normal leading-none text-[40px] md:text-[80px] lg:text-[120px] xl:text-[150px] -translate-y-1 lg:-translate-y-2 xl:-translate-y-4">
                2.0
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =============================================
          PHASES 7–8 — "welcome" + "final" (Nodes 26006-4356 & 26006-4361)
          Left-aligned content. Phones + badges appear in "final".
      ============================================= */}
      <AnimatePresence>
        {showHeroContent && (
          <motion.div
            key="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-[5] w-full h-full max-w-[1920px] mx-auto overflow-hidden lg:overflow-visible"
          >
            {/* LEFT SIDE: Text */}
            <div className="flex flex-col z-20 absolute left-6 lg:left-[10px] top-[150px] lg:top-[210px] w-[calc(100%-48px)] lg:w-auto pointer-events-none">
              <div className="flex flex-col gap-[16px] lg:gap-[25px]">
                {/* Welcome to */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-white text-[48px] lg:text-[96px] font-medium leading-[1.3] pointer-events-auto"
                >
                  {t("title")}
                </motion.h1>

                {/* pepsell 2.0 logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="flex items-center gap-6 pointer-events-auto"
                >
                  <div className="relative w-[280px] h-[34px] md:w-[450px] md:h-[55px] lg:w-[711px] lg:h-[87px]">
                    <Image src="/pepsell-logo.svg" alt="PEPSELL" fill className="object-contain object-left" priority />
                  </div>
                  <span className="text-white font-normal leading-none text-[32px] md:text-[64px] lg:text-[96px] -translate-y-1 lg:-translate-y-2">
                    2.0
                  </span>
                </motion.div>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-white text-[20px] lg:text-[32px] font-medium leading-[1.5] mt-[24px] lg:mt-[56px] max-w-[887px] pointer-events-auto"
                style={{ whiteSpace: "pre-line" }}
              >
                {t("subtitle")}
              </motion.p>
            </div>

            {/* RIGHT SIDE: Phones — appear only in "final" phase */}
            <AnimatePresence>
              {isFinalDark && (
                <>
                  {/* Left Phone */}
                  <motion.div
                    key="phone-left"
                    initial={{ x: "20%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="hidden lg:block absolute z-20 pointer-events-auto"
                    style={{ right: "306px", top: "-123px", width: "663px", height: "1019px" }}
                  >
                    <Image
                      src="/images/splash-product-left.png"
                      alt="Pepsell Interface 1"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>

                  {/* Right Phone */}
                  <motion.div
                    key="phone-right"
                    initial={{ x: "20%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="hidden lg:block absolute z-10 pointer-events-auto"
                    style={{ right: "-26px", bottom: "-149px", width: "663px", height: "1019px" }}
                  >
                    <Image
                      src="/images/splash-product-right.png"
                      alt="Pepsell Interface 2"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* FLOATING BADGES — appear only in "final" phase */}
            <AnimatePresence>
              {isFinalDark && (
                <>
                  {/* Higher Sales Badge */}
                  <motion.div
                    key="badge-1"
                    initial={{ y: "-120vh", opacity: 0, rotate: -5 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{
                      duration: 1.4,
                      delay: 0.1,
                      type: "spring",
                      bounce: 0.4,
                      damping: 12
                    }}
                    style={{ left: "161px", top: "932px", zIndex: 30 }}
                    className="absolute px-[44px] py-[32px] rounded-full bg-white shadow-2xl flex items-center justify-center w-max min-w-[404px] h-[116px]"
                  >
                    <span className="text-[#0A0A0A] font-bold text-[48px] leading-none tracking-tight whitespace-nowrap">
                      {t("badge1")}
                    </span>
                  </motion.div>

                  {/* Lower Incentive Costs Badge */}
                  <motion.div
                    key="badge-2"
                    initial={{ y: "-150vh", opacity: 0, rotate: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: 10.178 }}
                    transition={{
                      duration: 1.6,
                      delay: 0.3,
                      type: "spring",
                      bounce: 0.4,
                      damping: 12
                    }}
                    style={{
                      left: "494px",
                      top: "824px",
                      zIndex: 30,
                      transformOrigin: "top left"
                    }}
                    className="absolute px-[44px] py-[32px] rounded-full bg-white shadow-2xl flex items-center justify-center w-max min-w-[642px] h-[116px]"
                  >
                    <span className="text-[#0A0A0A] font-bold text-[48px] leading-none tracking-tight whitespace-nowrap">
                      {t("badge2")}
                    </span>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
