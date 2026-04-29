import { setRequestLocale } from "next-intl/server";
import {
  HeroSection,
  TransitionPattern,
  AdaptabilitySection,
  QuoteSection,
  IndustriesSection,
  MotivationSection,
  FeaturesSection,
} from "@/components/sections";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TransitionPattern />
      <AdaptabilitySection />
      <QuoteSection />
      <IndustriesSection />
      <MotivationSection />
      <FeaturesSection />
    </>
  );
}
