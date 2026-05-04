"use client";

import { useTranslations } from "next-intl";
import { LinesSection, DEFAULT_LINES } from "./LinesSection";
import { motion } from "framer-motion";

// Custom lines for the Quote Section — using white and black/dark colors on red background
const QUOTE_LINES = DEFAULT_LINES.map((line, i) => {
  // Use white for the 2nd and 5th lines to match the Figma "highlight" pills
  if (i === 1 || i === 4) {
    return { ...line, fill: "#FFFFFF" };
  }
  // Keep original colors for the 3rd and 6th lines (i=2 and i=5)
  if (i === 2 || i === 5) {
    return line;
  }
  // Others are dark/black
  return { ...line, fill: "#23232A" };
});

export function QuoteSection() {
  const t = useTranslations("Quotes");

  return (
    <LinesSection 
      bgColor="#980000" 
      lines={QUOTE_LINES}
      maxWidth="none"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-16 px-10 w-full">
        {/* Quote Text */}
        <motion.p 
          className="text-white font-montserrat font-medium text-center leading-[120%] max-w-[1850px] w-full"
          style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
        >
          {t("quote1.text")}
        </motion.p>

        {/* Author */}
        <motion.span 
          className="text-white font-montserrat font-normal text-center leading-none max-w-[1400px]"
          style={{ fontSize: "clamp(24px, 4vw, 60px)" }}
        >
          {t("quote1.author")}
        </motion.span>
      </div>
    </LinesSection>
  );
}
