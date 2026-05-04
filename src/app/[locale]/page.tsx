import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  HeroSection,
  TransitionPattern,
  AdaptabilitySection,
  AdaptiveUISection,
  QuoteSection,
  IndustriesSection,
  MotivationSection,
  LinesSection,
} from "@/components/sections";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Adaptability");

  return (
    <div className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <div className="h-[100dvh] w-full snap-start snap-always shrink-0 relative">
        <HeroSection />
      </div>
      <div className="h-[100dvh] w-full snap-start snap-always shrink-0 relative">
        <LinesSection>
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
            {/* Logo pepsell 2.0 */}
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="relative w-[280px] h-[34px] md:w-[600px] md:h-[74px] lg:w-[880px] lg:h-[108px] xl:w-[908px] xl:h-[111px]">
                <Image src="/pepsell-logo.svg" alt="PEPSELL" fill className="object-contain" priority />
              </div>
              <span className="text-white font-normal leading-none text-[40px] md:text-[80px] lg:text-[120px] xl:text-[130px] -translate-y-1 lg:-translate-y-2 xl:-translate-y-3">
                2.0
              </span>
            </div>

            {/* Main Text */}
            <p className="text-white font-montserrat font-medium text-center leading-[120%] px-8 max-w-[1200px]" style={{ fontSize: "clamp(36px, 6vw, 96px)" }}>
              {t("subtitle")}
            </p>
          </div>
        </LinesSection>
      </div>
      <div className="h-[100dvh] w-full snap-start snap-always shrink-0 relative">
        <AdaptiveUISection />
      </div>
    </div>
  );
}
