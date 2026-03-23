
import React from 'react';
import Hero from '../components/Hero';
import { ART_FORMS } from '../constants';
import { ArtForm, Artisan } from '../types';

interface HomePageProps {
  onArtFormSelect: (id: string) => void;
  onArtisanSelect: (id: string) => void;
  artisans: Artisan[];
}

const HomePage: React.FC<HomePageProps> = ({ onArtFormSelect, onArtisanSelect, artisans }) => {
  return (
    <div className="bg-[#cab89d]">
      <Hero 
        title="Kashmiri Visual Arts"
        subtitle="An archive documenting traditional visual art forms, their processes, and the artisans who keep them alive."
        image="https://images.unsplash.com/photo-1590004953392-5aba2e72269a?q=80&w=1440&auto=format&fit=crop"
      />

      {/* Explore Art Forms Section */}
      <section className="py-12 md:py-20 max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-normal text-[#3E2D1F] whitespace-nowrap font-playfair">Explore Art Forms</h2>
          <div className="flex-grow h-[1px] bg-[#5A4632]/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ART_FORMS.map((form: ArtForm) => (
            <div 
              key={form.id}
              onClick={() => onArtFormSelect(form.id)}
              className="bg-[#F2E6D8] border border-[#D6C7B2] flex flex-col shadow-sm active:scale-[0.98] md:hover:-translate-y-1 md:hover:shadow-xl transition-all cursor-pointer group rounded-sm overflow-hidden"
            >
              <div className="overflow-hidden h-44 md:h-48">
                <img 
                  src={form.image} 
                  alt={form.name} 
                  className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#4B3827] mb-2 tracking-wide font-playfair">{form.name}</h3>
                <div className="w-12 h-[1px] bg-[#4B3827]/40 mb-3" />
                <p className="text-sm text-[#7a6041] font-medium leading-relaxed font-lora line-clamp-2">{form.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Featured Artisans Section */}
      <section className="py-12 md:py-20 bg-[#c4b194]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-20">
          <div className="flex flex-col mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-normal text-[#3E2D1F] mb-1 font-playfair">Featured Artisans</h2>
            <h3 className="text-lg md:text-2xl font-normal text-[#6b5a48] mb-4 font-lora italic">The Keepers of Heritage</h3>
            <div className="w-24 md:w-32 h-1 bg-[#5A4632] mx-auto md:mx-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {artisans.slice(0, 4).map((artisan: Artisan) => (
              <div 
                key={artisan.id} 
                onClick={() => { if(window.innerWidth < 768) onArtisanSelect(artisan.id) }}
                className="relative bg-[#F2E6D8] border border-[#D6C7B2] flex flex-col group overflow-hidden shadow-lg h-[450px] rounded-sm cursor-pointer"
              >
                {/* Artisan Image */}
                <div className="h-full w-full">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-105"
                  />
                </div>

                {/* Mobile/Default Info Bar */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 transition-transform duration-500 md:group-hover:translate-y-full">
                   <h4 className="text-2xl font-normal text-[#F5F1EA] mb-1 font-playfair">{artisan.name}</h4>
                   <p className="text-sm text-[#E2D7C6] italic font-lora mb-3">{artisan.role}</p>
                   <div className="md:hidden mt-2 pt-2 border-t border-white/20">
                      <span className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-bold">Tap to View Profile</span>
                   </div>
                </div>

                {/* Desktop Hover Reveal Details */}
                <div className="hidden md:flex absolute inset-0 bg-[#3E2D1F]/90 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex-col justify-center items-center text-center">
                  <h4 className="text-3xl font-normal text-[#F5F1EA] mb-2 font-playfair transform translate-y-4 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                    {artisan.name}
                  </h4>
                  <p className="text-[#D6C7B2] font-semibold mb-4 tracking-[0.1em] uppercase text-xs font-lora transform translate-y-4 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                    {artisan.role}
                  </p>
                  <div className="w-16 h-[1px] bg-[#D6C7B2]/40 mb-6 transform scale-x-0 transition-transform duration-500 delay-150 group-hover:scale-x-100" />
                  
                  <p className="text-base text-[#E2D7C6] leading-relaxed mb-6 font-lora italic px-4 transform translate-y-4 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
                    "{artisan.bio}"
                  </p>
                  
                  <div className="text-[10px] text-[#8A7660] mb-8 uppercase tracking-[0.2em] font-bold transform translate-y-4 opacity-0 transition-all duration-500 delay-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {artisan.experience}
                  </div>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); onArtisanSelect(artisan.id); }}
                    className="px-8 py-3 border-2 border-[#F5F1EA] text-[#F5F1EA] hover:bg-[#F5F1EA] hover:text-[#3E2D1F] transition-all duration-700 delay-[400ms] opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 text-sm tracking-widest uppercase font-bold active:scale-95"
                  >
                    View Full Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 max-w-[1440px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-normal text-[#3E2D1F] mb-8 font-playfair">About the Archive</h2>
          <p className="text-lg md:text-xl text-[#7a6041] leading-loose mb-12 font-lora italic px-4">
            "A living record of Srinagar's artistic soul. We document not just the artifacts, but the hands that shape them and the stories they tell."
          </p>
          <button className="bg-[#7B4A2E] hover:bg-[#5C331E] text-[#F4EDE4] px-12 py-4 rounded-sm transition-all hover:shadow-2xl text-lg tracking-widest shadow-xl w-full sm:w-auto font-bold uppercase">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
