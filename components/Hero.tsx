
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  compact?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image, compact }) => {
  return (
    <section className={`relative w-full overflow-hidden flex items-center justify-center ${compact ? 'h-[300px] md:h-[420px]' : 'h-[450px] md:h-[650px]'}`}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      <div className="relative z-10 text-center max-w-4xl px-6 md:px-10">
        <h1 className={`${compact ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-4xl md:text-6xl lg:text-7xl'} font-normal text-[#F5F1EA] mb-4 md:mb-5 tracking-wide drop-shadow-lg font-playfair`}>
          {title}
        </h1>
        <p className="text-base md:text-[18px] text-[#E2D7C6] font-normal leading-relaxed drop-shadow-md max-w-2xl mx-auto font-lora">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
