
import React, { useState, useEffect } from 'react';
import { ART_FORMS } from '../constants';
import { Artisan } from '../types';

interface ExplorePageProps {
  onArtFormSelect: (id: string) => void;
  onArtisanSelect: (id: string) => void;
  artisans: Artisan[];
  subFilterIntent?: string | null;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ onArtFormSelect, onArtisanSelect, artisans, subFilterIntent }) => {
  const [filter, setFilter] = useState(subFilterIntent ? 'masters' : 'all');
  const [subFilter, setSubFilter] = useState<string | null>(subFilterIntent || null);

  useEffect(() => {
    if (subFilterIntent) {
      setSubFilter(subFilterIntent);
      setFilter('masters');
    }
  }, [subFilterIntent]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'crafts', name: 'Art Forms' },
    { id: 'masters', name: 'Artisans' }
  ];

  const handleCategoryChange = (catId: string) => {
    setFilter(catId);
  };

  const filteredArtisans = artisans.filter(artisan => {
    if (!subFilter) return true;
    const roleMatch = artisan.role.toLowerCase().includes(subFilter.toLowerCase().split(' ')[0].toLowerCase());
    const nameMatch = artisan.role.toLowerCase().includes(subFilter.toLowerCase());
    return roleMatch || nameMatch;
  });

  return (
    <div className="bg-gaatha-bg min-h-screen">
      <section className="pt-10 pb-12 md:pt-24 md:pb-20 px-4 md:px-20 max-w-[1440px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-normal text-gaatha-ink mb-6 font-playfair text-center md:text-left">Archive Explorer</h1>
        <p className="text-lg md:text-xl text-gaatha-muted max-w-2xl mb-10 md:mb-16 font-lora text-center md:text-left">
          A comprehensive digital collection cataloging the visual heritage of Kashmir through its crafts and creators.
        </p>

        <div className="flex flex-col items-center md:items-start mb-12 md:mb-20">
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 justify-center md:justify-start w-full">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-6 md:px-10 py-3 rounded-full border-2 transition-all whitespace-nowrap text-xs md:text-sm font-bold tracking-[0.2em] uppercase ${
                  filter === cat.id 
                  ? 'bg-gaatha-ink text-white border-gaatha-ink shadow-lg scale-105' 
                  : 'bg-transparent text-gaatha-ink border-gaatha-ink hover:bg-gaatha-ink/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {subFilter && (
            <div className="mt-6 flex items-center gap-3 bg-gaatha-paper border border-gaatha-line px-5 py-2 rounded-full shadow-sm animate-fade-in">
              <span className="text-xs font-bold uppercase tracking-widest text-gaatha-muted">
                Filtering by: <span className="text-gaatha-accent">{subFilter}</span>
              </span>
              <button 
                onClick={() => setSubFilter(null)}
                className="w-5 h-5 flex items-center justify-center rounded-full bg-gaatha-accent text-white text-[10px] hover:bg-gaatha-ink transition-colors"
                title="Clear filter"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <div className="space-y-20 md:space-y-32">
          {(filter === 'all' || filter === 'crafts') && (
            <section>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gaatha-ink font-playfair">Artistic Traditions</h2>
                <div className="flex-grow h-[1px] bg-gaatha-line" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {ART_FORMS.map(form => (
                  <div 
                    key={form.id} 
                    onClick={() => onArtFormSelect(form.id)}
                    className="group cursor-pointer active:scale-[0.98] transition-all"
                  >
                    <div className="relative h-60 md:h-72 overflow-hidden mb-6 rounded-sm shadow-xl">
                      <img src={form.image} alt={form.name} className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gaatha-ink md:group-hover:text-gaatha-accent transition-colors font-playfair">{form.name}</h3>
                    <p className="text-base text-gaatha-muted line-clamp-2 mt-3 font-lora leading-relaxed">{form.fullDescription}</p>
                    <div className="mt-4 text-xs font-bold text-gaatha-accent tracking-[0.2em] uppercase border-b border-gaatha-accent w-max pb-1">
                      View Tradition Details
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {(filter === 'all' || filter === 'masters') && (
            <section>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gaatha-ink font-playfair">Master Artisans</h2>
                <div className="flex-grow h-[1px] bg-gaatha-line" />
              </div>
              
              {filteredArtisans.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredArtisans.map(artisan => (
                    <div 
                      key={artisan.id}
                      onClick={() => { if(window.innerWidth < 768) onArtisanSelect(artisan.id) }}
                      className="bg-gaatha-paper border border-gaatha-line flex flex-col group overflow-hidden shadow-lg h-[450px] rounded-sm cursor-pointer relative"
                    >
                      <div className="h-full w-full">
                        <img 
                          src={artisan.image} 
                          alt={artisan.name} 
                          className="w-full h-full object-cover grayscale transition-all duration-1000 md:group-hover:grayscale-0 md:group-hover:scale-105" 
                        />
                      </div>

                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 transition-transform duration-500 md:group-hover:translate-y-full">
                        <h3 className="text-xl md:text-2xl font-bold text-gaatha-bg font-playfair mb-1">{artisan.name}</h3>
                        <p className="text-xs md:text-sm text-gaatha-bg/80 italic font-lora uppercase tracking-widest">{artisan.role}</p>
                      </div>
                      
                      <div className="hidden md:flex absolute inset-0 bg-gaatha-ink/90 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex-col justify-center items-center text-center">
                        <h4 className="text-2xl font-normal text-gaatha-bg mb-1 font-playfair transform translate-y-4 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                          {artisan.name}
                        </h4>
                        <p className="text-gaatha-bg/60 font-semibold mb-3 tracking-[0.1em] uppercase text-[10px] font-lora transform translate-y-4 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                          {artisan.role}
                        </p>
                        <div className="w-12 h-[1px] bg-gaatha-bg/40 mb-4 transform scale-x-0 transition-transform duration-500 delay-150 group-hover:scale-x-100" />
                        
                        <p className="text-sm text-gaatha-bg/80 leading-relaxed mb-6 font-lora italic px-2 transform translate-y-4 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
                          "{artisan.bio}"
                        </p>
                        
                        <div className="text-[10px] text-gaatha-muted mb-6 uppercase tracking-[0.2em] font-bold transform translate-y-4 opacity-0 transition-all duration-500 delay-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {artisan.experience}
                        </div>
                        
                        <button 
                          onClick={(e) => { e.stopPropagation(); onArtisanSelect(artisan.id); }}
                          className="px-6 py-2 border-2 border-gaatha-bg text-gaatha-bg hover:bg-gaatha-bg hover:text-gaatha-ink transition-all duration-700 delay-[400ms] opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 text-[10px] tracking-[0.2em] uppercase font-bold active:scale-95"
                        >
                          View Profile
                        </button>
                      </div>

                      <div className="md:hidden absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                        <div className="text-white text-lg">→</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center bg-gaatha-paper/20 rounded-sm border border-dashed border-gaatha-line">
                  <p className="text-gaatha-accent font-playfair text-xl italic mb-4">No master artisans found matching this criteria.</p>
                  <button 
                    onClick={() => setSubFilter(null)}
                    className="text-xs font-bold uppercase tracking-widest text-gaatha-ink border-b border-gaatha-ink pb-1"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
