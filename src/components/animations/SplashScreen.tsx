"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after the animation sequence completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          {/* The expanding pill */}
          <motion.div
            initial={{ width: 80, height: 80, borderRadius: 40 }}
            animate={{
              width: [80, 80, 400],
              height: [80, 80, 100],
              borderRadius: [40, 40, 50],
            }}
            transition={{
              duration: 2,
              times: [0, 0.3, 1],
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="bg-[#B71C1C] flex items-center justify-center overflow-hidden relative shadow-2xl"
          >
            {/* The text inside the pill */}
            <motion.div
              className="absolute whitespace-nowrap text-white font-light tracking-[0.2em] text-4xl flex items-center gap-2"
            >
              <span className="font-sans lowercase">pepsell</span>
              <span className="font-sans font-light">2.0</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
