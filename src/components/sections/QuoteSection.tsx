"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations";

const quotes = [
  {
    key: "quote1",
    bg: "from-[#FF6D00] to-[#E53935]",
  },
  {
    key: "quote2",
    bg: "from-[#E53935] to-[#B71C1C]",
  },
  {
    key: "quote3",
    bg: "from-[#1A1A1A] to-[#0A0A0A]",
  },
] as const;

export function QuoteSection() {
  const t = useTranslations("Quotes");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative">
      <motion.div style={{ opacity }}>
        {quotes.map((quote, idx) => (
          <div
            key={quote.key}
            className={`py-24 md:py-32 bg-gradient-to-br ${quote.bg}`}
          >
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <ScrollReveal animation="scaleIn" delay={0.1}>
                <blockquote className="text-center">
                  <motion.p
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    {t(`${quote.key}.text`)}
                  </motion.p>
                  <motion.cite
                    className="text-lg md:text-xl text-white/60 not-italic font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    — {t(`${quote.key}.author`)}
                  </motion.cite>
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Decorative divider line */}
            {idx < quotes.length - 1 && (
              <div className="max-w-xs mx-auto mt-16">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="h-px bg-white/20 origin-center"
                />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
