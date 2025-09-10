import { memo } from "react";
import { usePerformanceMonitoring } from "@/hooks/usePerformance";
import HeroContent from "@/components/hero/HeroContent";
import HeroServiceCards from "@/components/hero/HeroServiceCards";

const HeroSection = memo(() => {
  usePerformanceMonitoring('HeroSection');

  return (
    <section id="inicio" className="relative w-full overflow-hidden hero-section bg-gradient-to-b from-brand-blue/5 to-brand-light-blue/5">
      {/* Desktop Video */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[850px] 2xl:h-[900px] hidden md:block bg-gradient-to-b from-brand-blue/5 to-brand-light-blue/5">
        <video
          className="w-full h-full object-contain max-w-full"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster=""
          style={{ imageRendering: 'crisp-edges' }}
          aria-label="Israel Coworking - Vídeo institucional desktop"
        >
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        {/* Overlay sutil para melhor contraste */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
      </div>

      {/* Mobile Video */}
      <div className="relative w-full h-[360px] sm:h-[420px] block md:hidden bg-gradient-to-b from-brand-blue/5 to-brand-light-blue/5">
        <video
          className="w-full h-full object-contain max-w-full"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ imageRendering: 'crisp-edges' }}
          aria-label="Israel Coworking - Vídeo institucional mobile"
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        {/* Overlay sutil para melhor contraste */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;