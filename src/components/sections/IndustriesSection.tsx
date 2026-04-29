"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

const tagKeys = ["telco", "diy", "pharmacy", "eshop", "fmcg", "retail"] as const;

export function IndustriesSection() {
  const t = useTranslations("Industries");

  return (
    <section className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal animation="fadeInUp">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-12">
            {t("title")}
          </h2>
        </ScrollReveal>

        <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.08}>
          {tagKeys.map((key) => (
            <StaggerItem key={key}>
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-white text-[#0A0A0A] font-semibold text-lg shadow-md border border-gray-100 cursor-default transition-colors duration-200 hover:bg-[#E53935] hover:text-white hover:border-[#E53935]"
              >
                {t(`tags.${key}`)}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
