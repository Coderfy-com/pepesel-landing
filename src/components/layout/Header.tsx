"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "uk") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-transparent"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          width="140"
          height="32"
          viewBox="0 0 140 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <rect
            x="1"
            y="4"
            width="138"
            height="24"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <text
            x="12"
            y="22"
            fill="currentColor"
            fontFamily="var(--font-geist-sans), sans-serif"
            fontSize="14"
            fontWeight="700"
            letterSpacing="1"
          >
            pepsell
          </text>
          <path
            d="M115 20L122 12L126 16L132 8"
            stroke="#E53935"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Language Switcher */}
      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-1 py-1">
        <button
          onClick={() => switchLocale("en")}
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium transition-all duration-200",
            locale === "en"
              ? "bg-white text-black"
              : "text-white/70 hover:text-white"
          )}
        >
          En
        </button>
        <button
          onClick={() => switchLocale("uk")}
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium transition-all duration-200",
            locale === "uk"
              ? "bg-white text-black"
              : "text-white/70 hover:text-white"
          )}
        >
          Ua
        </button>
      </div>
    </motion.header>
  );
}
