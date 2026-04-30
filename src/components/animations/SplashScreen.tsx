"use client";

import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

/*
  ANIMATION PHASES (based on Figma prototype):
  0.0s – 0.8s  : Red dot appears and expands horizontally into a capsule
  0.8s – 1.6s  : PEPSELL 2.0 logo fades in inside the capsule
  1.6s – 2.0s  : (hold)
  2.0s – 3.0s  : Capsule expands to fill full screen (height grows)
  3.0s – 3.6s  : PEPSELL 2.0 logo fades OUT
  3.6s – 4.4s  : "Welcome to PEPSELL 2.0" content fades IN, side product images slide in
  4.4s – 5.8s  : (hold — user reads the screen)
  5.8s – 6.6s  : Splash exits upward
*/

export function SplashScreen() {
  const [phase, setPhase] = useState<
    "dot" | "capsule" | "logo" | "expand" | "fade-logo" | "welcome" | "exit"
  >("dot");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("capsule"),    100),   // start expanding capsule width
      setTimeout(() => setPhase("logo"),       900),   // show logo inside capsule
      setTimeout(() => setPhase("expand"),     2200),  // expand height to full screen
      setTimeout(() => setPhase("fade-logo"),  3200),  // fade out pepsell 2.0
      setTimeout(() => setPhase("welcome"),    3800),  // fade in welcome screen
      setTimeout(() => setPhase("exit"),       6200),  // exit
      setTimeout(() => setIsVisible(false),    7000),  // unmount
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const isExpanded = phase === "expand" || phase === "fade-logo" || phase === "welcome" || phase === "exit";
  const showLogo = phase === "logo" || phase === "expand";
  const showWelcome = phase === "welcome" || phase === "exit";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Main red shape */}
          <motion.div
            animate={{
              width:
                phase === "dot"
                  ? "0px"
                  : isExpanded
                  ? "100vw"
                  : "min(1553px, 100vw)",
              height:
                phase === "dot"
                  ? "0px"
                  : isExpanded
                  ? "100vh"
                  : "min(267px, 30vw)",
              borderRadius: isExpanded ? "0px" : "9999px",
            }}
            transition={{
              width:  { duration: phase === "dot" ? 0.01 : phase === "capsule" ? 0.9 : phase === "expand" ? 0.8 : 0.01, ease: [0.76, 0, 0.24, 1] },
              height: { duration: phase === "expand" ? 0.9 : 0.01, ease: [0.76, 0, 0.24, 1] },
              borderRadius: { duration: 0.6, ease: "easeOut" },
            }}
            className="bg-[#980000] absolute flex items-center justify-center overflow-hidden"
          >
            {/* PEPSELL 2.0 logo inside the capsule */}
            <AnimatePresence>
              {(showLogo || phase === "fade-logo") && (
                <motion.div
                  key="pepsell-logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showLogo ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-center justify-center gap-4 md:gap-8 absolute"
                >
                  <div className="relative w-[180px] h-[24px] md:w-[540px] md:h-[66px] lg:w-[810px] lg:h-[99px] xl:w-[1080px] xl:h-[132px]">
                    <Image
                      src="/pepsell-logo.svg"
                      alt="PEPSELL"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span
                    className="text-white font-normal leading-[1.3] text-[32px] md:text-[80px] lg:text-[120px] xl:text-[150px] font-montserrat"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    2.0
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* === WELCOME SCREEN (full-screen red) === */}
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed inset-0 z-[101] bg-[#980000] flex items-center justify-center overflow-hidden"
              >
                {/* Left product image */}
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[28vw] max-w-[400px]"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  <Image
                    src="/images/splash-product-left.png"
                    alt=""
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain opacity-60"
                  />
                </motion.div>

                {/* Right product image */}
                <motion.div
                  initial={{ x: "120%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute right-0 top-1/2 w-[28vw] max-w-[400px]"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  <Image
                    src="/images/splash-product-right.png"
                    alt=""
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain opacity-60"
                  />
                </motion.div>

                {/* Center text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center justify-center text-center gap-4 md:gap-8"
                >
                  <h1
                    className="text-white font-medium leading-[1.3] text-[40px] md:text-[72px] lg:text-[96px] font-montserrat"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    Welcome to
                  </h1>
                  <div className="flex items-center justify-center gap-4 md:gap-8">
                    <div className="relative w-[180px] h-[24px] md:w-[450px] md:h-[55px] lg:w-[700px] lg:h-[86px]">
                      <Image
                        src="/pepsell-logo.svg"
                        alt="PEPSELL"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span
                      className="text-white font-normal leading-[1.3] text-[32px] md:text-[72px] lg:text-[96px] font-montserrat"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      2.0
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
