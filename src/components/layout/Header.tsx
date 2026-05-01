"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: "en" | "uk") => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const currentLangLabel = locale === "uk" ? "Ua" : "En";

  return (
    <motion.header
      initial={{ y: -71, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-[71px] flex items-center justify-between px-6 md:px-[64px] bg-transparent"
    >
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative w-[239px] h-[39px]">
          <Image
            src="/images/header/logo-white.svg"
            alt="PEPSELL"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>

      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 h-[39px] px-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
        >
          <span className="text-sm font-medium uppercase">{currentLangLabel}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 5, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 top-full mt-2 w-28 overflow-hidden rounded-lg bg-[#111113]/80 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => switchLocale("en")}
                className="w-full px-4 py-3 text-sm text-white hover:bg-white/10 text-left transition-colors border-b border-white/5"
              >
                English (En)
              </button>
              <button
                onClick={() => switchLocale("uk")}
                className="w-full px-4 py-3 text-sm text-white hover:bg-white/10 text-left transition-colors"
              >
                Українська (Ua)
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

