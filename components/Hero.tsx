
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  compact?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image, compact }) => {
  return (
    <section className={`relative w-full overflow-hidden flex items-center justify-center ${compact ? 'h-[300px] md:h-[420px]' : 'h-[500px] md:h-[750px]'}`}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms] scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gaatha-ink/30" />
      <div className="relative z-10 text-center max-w-5xl px-6 md:px-10">
        <span className="text-white font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block drop-shadow-md animate-fade-in">Kashmir Craft Archive</span>
        <h1 className={`${compact ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-7xl lg:text-8xl'} font-normal text-white mb-8 tracking-tight drop-shadow-2xl font-playfair leading-tight`}>
          {title}
        </h1>
        <div className="w-20 h-[1px] bg-white/40 mx-auto mb-8" />
        <p className="text-lg md:text-xl text-white/95 font-normal leading-relaxed drop-shadow-lg max-w-2xl mx-auto font-lora italic">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
