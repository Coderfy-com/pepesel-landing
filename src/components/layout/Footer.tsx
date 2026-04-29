import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: t("solutions"),
      links: ["Out Of Stock", "Merchandising", "Plan/Fact", "Education"],
    },
    {
      title: t("company"),
      links: [t("aboutUs"), t("careers"), t("blog")],
    },
    {
      title: t("resources"),
      links: [t("docs"), t("support")],
    },
    {
      title: t("contact"),
      links: ["info@pepsell.com", "+380 44 123 4567"],
    },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white py-16 px-6 md:px-12">
      <ScrollReveal animation="fadeInUp">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <svg
              width="120"
              height="28"
              viewBox="0 0 140 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/40"
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
                opacity="0.4"
              />
            </svg>

            <p className="text-sm text-white/40">
              © {currentYear} Pepsell. {t("rights")}.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                {t("privacy")}
              </a>
              <a
                href="#"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                {t("terms")}
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
