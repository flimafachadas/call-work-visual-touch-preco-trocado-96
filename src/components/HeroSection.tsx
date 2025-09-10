import { memo } from "react";
import { usePerformanceMonitoring } from "@/hooks/usePerformance";
import HeroContent from "@/components/hero/HeroContent";
import HeroServiceCards from "@/components/hero/HeroServiceCards";

const HeroSection = memo(() => {
  usePerformanceMonitoring('HeroSection');

  return (
    <section id="inicio" className="relative w-full overflow-hidden hero-section bg-gradient-to-b from-brand-blue/5 to-brand-light-blue/5">
      {/* Desktop Video */}
      <div className="relative w-full h-[420px] md:h-[520px] lg:h-[640px] hidden md:block">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Israel Coworking - Vídeo institucional desktop"
        >
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>

      {/* Mobile Video */}
      <div className="relative w-full h-[360px] sm:h-[420px] block md:hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Israel Coworking - Vídeo institucional mobile"
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;