
import { LazyImage } from "@/components/ui/lazy-image";
import { HERO_BACKGROUND_ELEMENTS } from "@/constants/hero";
import { memo } from "react";

const HeroBackground = memo(() => {
  return (
    <>
      {/* Estrela decorativa grande na borda esquerda */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 overflow-hidden">
        <img 
          src="/lovable-uploads/c5a6fefb-ab90-4ad5-a496-602ed576e8b7.png" 
          alt="Decoração estrela" 
          className="h-[32rem] w-auto lg:h-[42rem] xl:h-[52rem] opacity-25 hover:opacity-35 transition-opacity duration-500"
          style={{
            filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.15))'
          }}
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      {/* Estrela decorativa menor no lado direito */}
      <div className="absolute right-8 lg:right-16 top-1/4 z-0">
        <LazyImage 
          src="/lovable-uploads/3d3682ad-1f35-48f9-b21f-895e86f4ae4b.png" 
          alt="Decoração estrela" 
          className="w-28 h-28 lg:w-40 lg:h-40 xl:w-48 xl:h-48 opacity-10 animate-float"
          priority={true}
          aria-hidden="true"
        />
      </div>

      {/* Background elements */}
      {HERO_BACKGROUND_ELEMENTS.map((element, index) => (
        <div 
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.opacity} rounded-full ${element.blur} animate-float`}
          style={element.delay ? { animationDelay: element.delay } : undefined}
          aria-hidden="true"
        />
      ))}
    </>
  );
});

HeroBackground.displayName = "HeroBackground";

export default HeroBackground;
