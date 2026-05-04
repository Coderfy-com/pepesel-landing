"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function AdaptiveUISection() {
  const t = useTranslations("AdaptiveUI");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      // Base design is 1920x1080
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      // We use the smaller scale to ensure everything fits (object-contain behavior)
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section className="relative w-full h-full bg-[#111113] overflow-hidden flex items-center justify-center">
      {/* 
        Fixed-size stage that matches Figma exactly.
        Scaled to fit the screen while maintaining aspect ratio.
      */}
      <div 
        className="relative w-[1920px] h-[1080px] shrink-0"
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: "center center" 
        }}
      >
        {/* ====== LEFT SIDE TEXT (Frame 1404) ====== */}
        <div 
          className="absolute flex flex-col gap-[56px] z-10"
          style={{ left: "93px", top: "207px" }}
        >
          {/* Badge + Logo (Frame 1405) */}
          <div className="flex flex-col gap-[24px]">
            {/* Adaptive UI badge */}
            <div className="px-6 py-3 bg-[#23232A] rounded-full w-fit">
              <span className="text-white font-montserrat font-medium text-base leading-[140%]">
                {t("badge")}
              </span>
            </div>

            {/* pepsell logo + 2.0 (Group 38900) */}
            <div className="flex items-center gap-5">
              <div className="relative w-[376px] h-[46px]">
                <Image src="/pepsell-logo.svg" alt="PEPSELL" fill className="object-contain object-left" priority />
              </div>
              <span className="text-white font-normal leading-none text-[56px] -translate-y-0.5">
                2.0
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[#F8FAFC] font-montserrat font-medium text-[30px] leading-[150%] max-w-[340px]">
            {t("subtitle")}
          </p>
        </div>

        {/* ====== RIGHT SIDE: Video (Vector 2) ====== */}
        <div 
          className="absolute z-10 overflow-hidden"
          style={{ 
            left: "1251px", 
            top: "61px", 
            width: "403px", 
            height: "958px" 
          }}
        >
          <video
            src="/videos/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* ====== FLOATING BADGES (Group 38902) ====== */}
        {/* 
          Coordinates are groupX + badgeX from Figma
          Rotation matched to the visual design
        */}
        <div className="absolute inset-0 pointer-events-none z-20">
          
          {/* Badge: geo adapt */}
          <Badge 
            text={t("badges.geo")}
            bg="#981A1E"
            x={861} y={139}
            rotate={-15}
            delay={0.45}
          />

          {/* Badge: optimize to your activity log */}
          <Badge 
            text={t("badges.activity")}
            bg="#EF4C35"
            x={606} y={372}
            rotate={-10}
            delay={0.5}
          />

          {/* Badge: voice support */}
          <Badge 
            text={t("badges.voice")}
            bg="#FFFFFF"
            textColor="#0A0A0A"
            x={145} y={698}
            rotate={-27}
            delay={0.7}
            width={320}
          />

          {/* Badge: adapt catalog to your preference */}
          <Badge 
            text={t("badges.catalog")}
            bg="#23232A"
            x={606} y={720}
            rotate={32}
            delay={0.4}
            width={650}
          />

          {/* Stacked badges: Lang strictly above Theme, touching, aligned to the right edge */}
          <div 
            className="absolute flex flex-col items-end pointer-events-none"
            style={{ left: "92px", top: "748px" }}
          >
            {/* Badge: adapt to your lang */}
            {/* Badge: adapt to your lang */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.55, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center px-[44px] h-[116px] rounded-full bg-[#EF4C35] shadow-2xl"
              style={{ width: "400px" }}
            >
              <span className="text-white font-montserrat font-bold text-[32px] leading-none whitespace-nowrap">
                {t("badges.lang")}
              </span>
            </motion.div>

            {/* Badge: adapt to your dark/light mode policy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.65, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center px-[44px] h-[116px] rounded-full bg-[#981A1E] shadow-2xl"
              style={{ width: "720px" }}
            >
              <span className="text-white font-montserrat font-bold text-[32px] leading-none whitespace-nowrap">
                {t("badges.theme")}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ text, bg, textColor = "white", x, y, rotate, delay, width }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
      className={`absolute flex items-center justify-center px-[44px] h-[116px] rounded-full shadow-2xl ${width ? "" : "w-max"}`}
      style={{ 
        left: `${x}px`, 
        top: `${y}px`, 
        backgroundColor: bg,
        rotate: `${rotate}deg`,
        transformOrigin: "center center",
        width: width ? `${width}px` : undefined
      }}
    >
      <span 
        className="font-montserrat font-bold text-[32px] leading-none whitespace-nowrap"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </motion.div>
  );
}
