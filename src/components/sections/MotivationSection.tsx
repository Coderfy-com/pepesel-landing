"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ScrollReveal, ParallaxWrapper } from "@/components/animations";

export function MotivationSection() {
  const t = useTranslations("Motivation");

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <ScrollReveal animation="fadeInUp">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t("title")}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={0.15}>
              <p className="text-xl md:text-2xl text-white/50">{t("subtitle")}</p>
            </ScrollReveal>
          </div>

          <div className="flex gap-6 justify-center">
            <ParallaxWrapper speed={0.15} direction="up">
              <PhoneMockup label={t("expenses")} variant="dark" />
            </ParallaxWrapper>
            <ParallaxWrapper speed={0.25} direction="down">
              <PhoneMockup label={t("credits")} variant="red" />
            </ParallaxWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ label, variant }: { label: string; variant: "dark" | "red" }) {
  const isRed = variant === "red";
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`w-[200px] md:w-[240px] h-[400px] md:h-[480px] rounded-[2.5rem] border overflow-hidden shadow-2xl ${
        isRed
          ? "bg-gradient-to-b from-[#E53935] to-[#B71C1C] border-red-400/30"
          : "bg-gradient-to-b from-[#1A1A1A] to-[#111] border-white/10"
      }`}
    >
      <div className="px-5 pt-4">
        <div className="text-xs text-white/50 mb-6">17:00</div>
        <div className="text-white font-semibold text-lg mb-6">{label}</div>
        <div className="flex flex-col gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${isRed ? "bg-white/20" : "bg-white/10"}`} />
              <div className="flex-1 flex flex-col gap-1">
                <div className={`h-2 rounded ${isRed ? "bg-white/30" : "bg-white/15"}`} style={{ width: `${60 + i * 8}%` }} />
                <div className={`h-1.5 w-1/2 rounded ${isRed ? "bg-white/20" : "bg-white/10"}`} />
              </div>
              <span className="text-white/60 text-xs font-medium">${(100 + i * 25).toFixed(0)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/20" />
    </motion.div>
  );
}
