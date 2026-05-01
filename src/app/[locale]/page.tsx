import { setRequestLocale } from "next-intl/server";
import {
  HeroSection,
  TransitionPattern,
  AdaptabilitySection,
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

  return (
    <div className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <div className="h-[100dvh] w-full snap-start snap-always shrink-0 relative">
        <HeroSection />
      </div>
      <div className="h-[100dvh] w-full snap-start snap-always shrink-0 relative">
        <LinesSection />
      </div>
    </div>
  );
}
