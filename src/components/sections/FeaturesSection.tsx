"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const featureKeys = ["stock", "merchandising", "planfact", "education", "ordering"] as const;

const featureIcons = ["📦", "🧠", "📊", "🎓", "🛒"];

export function FeaturesSection() {
  const t = useTranslations("Features");

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-[#0A0A0A]/50 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {featureKeys.map((key, i) => (
            <StaggerItem key={key}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100 hover:bg-gradient-to-br hover:from-[#E53935] hover:to-[#D32F2F] hover:border-transparent transition-colors duration-300 cursor-default"
              >
                <motion.div
                  className="text-4xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {featureIcons[i]}
                </motion.div>
                <h3 className="text-xl font-bold text-[#0A0A0A] group-hover:text-white mb-3 transition-colors duration-300">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm text-[#0A0A0A]/50 group-hover:text-white/70 transition-colors duration-300 leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
