
import React from 'react';
import Hero from '../components/Hero';
import { ART_FORMS, STORIES } from '../constants';
import { ArtForm, Artisan, Story } from '../types';

interface HomePageProps {
  onArtFormSelect: (id: string) => void;
  onArtisanSelect: (id: string) => void;
  artisans: Artisan[];
}

const HomePage: React.FC<HomePageProps> = ({ onArtFormSelect, onArtisanSelect, artisans }) => {
  return (
    <div className="bg-gaatha-bg">
      <Hero 
        title="The Living Archive of Kashmir"
        subtitle="Documenting the heritage, the hands, and the stories behind the valley's timeless crafts."
        image="https://www.khyberhotels.com/public/uploads/Resort/71fae7fd378c4af57bf26f1e2c77b2da.jpg"
      />

      {/* Crafts Section (Gaatha Style) */}
      <section className="py-12 md:py-24 bg-gaatha-paper">
        <div className="gaatha-container">
          <div className="flex justify-between items-end mb-10 md:mb-16">
            <div>
              <span className="text-gaatha-accent font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Exploration</span>
              <h2 className="text-3xl md:text-5xl font-normal text-gaatha-ink font-playfair leading-tight">The Crafts</h2>
            </div>
            <button 
              onClick={() => onArtFormSelect('explore')}
              className="hidden md:block text-xs font-bold uppercase tracking-[0.2em] text-gaatha-ink hover:text-gaatha-accent transition-colors border-b border-gaatha-ink/20 pb-1"
            >
              View All Crafts
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {ART_FORMS.map((form: ArtForm) => (
              <div 
                key={form.id}
                onClick={() => onArtFormSelect(form.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 aspect-square">
                  <img 
                    src={form.image} 
                    alt={form.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gaatha-ink/20 group-hover:bg-gaatha-ink/0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-normal text-gaatha-ink mb-2 font-playfair text-center group-hover:text-gaatha-accent transition-colors">
                  {form.name}
                </h3>
                <p className="text-gaatha-ink/60 font-lora text-xs uppercase tracking-widest text-center">
                  Documentation & Research
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People Section (Gaatha Style) */}
      <section className="py-12 md:py-24 gaatha-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden shadow-xl">
              <img 
                src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/11/03/142345.jpg" 
                alt="Artisan at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-64 border-8 border-gaatha-bg bg-gaatha-paper p-8 shadow-2xl">
              <p className="text-gaatha-ink font-lora italic text-lg leading-relaxed">
                "Every stroke is a prayer, every pattern a memory of our ancestors."
              </p>
              <div className="mt-4 text-gaatha-accent font-bold tracking-widest uppercase text-[10px]">
                — Master Artisan
              </div>
            </div>
          </div>
          
          <div className="pt-8 lg:pt-0">
            <span className="text-gaatha-accent font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">The People</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-gaatha-ink font-playfair mb-6 md:mb-8 leading-tight">
              Meet the Keepers of Heritage
            </h2>
            <p className="text-gaatha-ink/70 font-lora text-base md:text-lg leading-loose mb-10">
              Our archive is more than just a collection of objects. It is a tribute to the resilient spirits of the valley—the artisans who have carried these traditions through centuries of change.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-12">
              {artisans.slice(0, 2).map(artisan => (
                <div key={artisan.id} className="group cursor-pointer" onClick={() => onArtisanSelect(artisan.id)}>
                  <div className="aspect-square overflow-hidden mb-4 rounded-full border border-gaatha-line p-1">
                    <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h4 className="text-gaatha-ink font-playfair text-base md:text-lg text-center group-hover:text-gaatha-accent transition-colors">{artisan.name}</h4>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onArtisanSelect('artists')}
              className="w-full sm:w-auto px-10 py-5 bg-gaatha-ink text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-gaatha-accent transition-all shadow-xl"
            >
              Explore All Artisans
            </button>
          </div>
        </div>
      </section>

      {/* Featured Stories Section (Gaatha Style) */}
      <section className="py-20 md:py-32 gaatha-container border-t border-gaatha-line/30">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <span className="text-gaatha-accent font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4">The Archive</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-gaatha-ink font-playfair text-center">Featured Stories</h2>
          <div className="w-12 h-[2px] bg-gaatha-accent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STORIES.map((story: Story) => (
            <div key={story.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gaatha-ink">
                  {story.category}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[1px] w-8 bg-gaatha-accent" />
                <span className="text-[10px] font-bold text-gaatha-muted uppercase tracking-widest">{story.date}</span>
              </div>
              <h3 className="text-2xl font-normal text-gaatha-ink mb-4 font-playfair leading-tight group-hover:text-gaatha-accent transition-colors">
                {story.title}
              </h3>
              <p className="text-gaatha-ink/70 font-lora text-sm leading-relaxed line-clamp-3">
                {story.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section (Gaatha Style) */}
      <section className="py-24 bg-gaatha-ink text-gaatha-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gaatha-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Our Mission</span>
          <h2 className="text-3xl md:text-5xl font-normal font-playfair mb-10 leading-relaxed italic">
            "To preserve the visual vocabulary of Kashmir, ensuring that the whispers of the past remain audible to the future."
          </h2>
          <div className="w-20 h-[1px] bg-gaatha-bg/20 mx-auto mb-10" />
          <p className="text-gaatha-bg/60 font-lora text-lg leading-loose max-w-2xl mx-auto">
            The Kashmiri Visual Arts Archive is a collaborative effort to document, research, and celebrate the rich artistic traditions of the valley.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
