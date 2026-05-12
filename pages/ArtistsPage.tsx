
import React, { useState, useEffect } from 'react';
import { ART_FORMS } from '../constants';
import { Artisan } from '../types';

interface ArtistsPageProps {
  onArtisanSelect: (id: string) => void;
  artisans: Artisan[];
  preAppliedCraft?: string | null;
}

const ArtistsPage: React.FC<ArtistsPageProps> = ({ onArtisanSelect, artisans, preAppliedCraft }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    craft: preAppliedCraft || 'all',
    ageRange: 'all',
    location: 'all',
    artworks: 'all',
    experience: 'all'
  });

  useEffect(() => {
    if (preAppliedCraft) {
      setFilters(f => ({ ...f, craft: preAppliedCraft }));
    }
  }, [preAppliedCraft]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(f => ({ ...f, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      craft: 'all',
      ageRange: 'all',
      location: 'all',
      artworks: 'all',
      experience: 'all'
    });
  };

  const filteredArtisans = artisans.filter(artisan => {
    const craftMatch = filters.craft === 'all' || artisan.role.toLowerCase().includes(filters.craft.toLowerCase());
    
    let ageMatch = true;
    if (filters.ageRange === '30-45') ageMatch = artisan.age >= 30 && artisan.age <= 45;
    if (filters.ageRange === '46-60') ageMatch = artisan.age >= 46 && artisan.age <= 60;
    if (filters.ageRange === '60+') ageMatch = artisan.age > 60;

    const locationMatch = filters.location === 'all' || artisan.location === filters.location;

    let artworksMatch = true;
    if (filters.artworks === '0-50') artworksMatch = artisan.artworksCount <= 50;
    if (filters.artworks === '51-150') artworksMatch = artisan.artworksCount > 50 && artisan.artworksCount <= 150;
    if (filters.artworks === '150+') artworksMatch = artisan.artworksCount > 150;

    let experienceMatch = true;
    if (filters.experience === '0-20') experienceMatch = artisan.experienceYears <= 20;
    if (filters.experience === '21-35') experienceMatch = artisan.experienceYears > 20 && artisan.experienceYears <= 35;
    if (filters.experience === '35+') experienceMatch = artisan.experienceYears > 35;

    return craftMatch && ageMatch && locationMatch && artworksMatch && experienceMatch;
  });

  const locations = Array.from(new Set(artisans.map(a => a.location)));
  const hasActiveFilters = Object.values(filters).some(v => v !== 'all');

  return (
    <div className="bg-gaatha-bg min-h-screen">
      <section className="pt-12 pb-6 px-6 max-w-[1440px] mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-playfair text-gaatha-ink mb-4">Master Artists</h1>
          <p className="text-lg font-lora italic text-gaatha-ink/60">Explore the heritage of Kashmir through its most skilled creators.</p>
        </div>

        {/* --- UNIQUE COLLAPSIBLE FILTER BAR --- */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between border-y border-gaatha-line py-4 mb-4 gap-4">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-3 px-6 py-2.5 transition-all rounded-sm border ${
                  isFilterOpen ? 'bg-gaatha-ink text-white border-gaatha-ink' : 'bg-white border-gaatha-line text-gaatha-ink hover:bg-gaatha-ink/5'
                }`}
              >
                <svg className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{isFilterOpen ? 'Close Filters' : 'Filter Archive'}</span>
              </button>
              
              <div className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.3em] text-gaatha-ink/40">
                Showing {filteredArtisans.length} of {artisans.length} Masters
              </div>
            </div>

            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="text-[10px] font-bold uppercase tracking-widest text-gaatha-accent hover:text-gaatha-ink underline decoration-dotted underline-offset-4"
              >
                Clear All Parameters
              </button>
            )}
          </div>

          {/* Expanded Filter Panel */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isFilterOpen ? 'max-h-[800px] opacity-100 mb-10' : 'max-h-0 opacity-0 pointer-events-none'}`}>
            <div className="bg-white border border-gaatha-line p-8 md:p-12 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gaatha-accent">Craft Tradition</label>
                <select 
                  value={filters.craft}
                  onChange={(e) => handleFilterChange('craft', e.target.value)}
                  className="w-full bg-gaatha-bg border border-gaatha-line p-3 text-xs font-lora focus:outline-none focus:ring-1 focus:ring-gaatha-accent cursor-pointer"
                >
                  <option value="all">All Traditions</option>
                  {ART_FORMS.map(af => (
                    <option key={af.id} value={af.name}>{af.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gaatha-accent">Age Group</label>
                <select 
                  value={filters.ageRange}
                  onChange={(e) => handleFilterChange('ageRange', e.target.value)}
                  className="w-full bg-gaatha-bg border border-gaatha-line p-3 text-xs font-lora focus:outline-none focus:ring-1 focus:ring-gaatha-accent cursor-pointer"
                >
                  <option value="all">Any Age</option>
                  <option value="30-45">30 - 45 Years</option>
                  <option value="46-60">46 - 60 Years</option>
                  <option value="60+">60+ Years</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gaatha-accent">Region</label>
                <select 
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full bg-gaatha-bg border border-gaatha-line p-3 text-xs font-lora focus:outline-none focus:ring-1 focus:ring-gaatha-accent cursor-pointer"
                >
                  <option value="all">All Districts</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gaatha-accent">Experience</label>
                <select 
                  value={filters.experience}
                  onChange={(e) => handleFilterChange('experience', e.target.value)}
                  className="w-full bg-gaatha-bg border border-gaatha-line p-3 text-xs font-lora focus:outline-none focus:ring-1 focus:ring-gaatha-accent cursor-pointer"
                >
                  <option value="all">Any Experience</option>
                  <option value="0-20">Under 20 Years</option>
                  <option value="21-35">21 - 35 Years</option>
                  <option value="35+">35+ Years</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gaatha-accent">Workload</label>
                <select 
                  value={filters.artworks}
                  onChange={(e) => handleFilterChange('artworks', e.target.value)}
                  className="w-full bg-gaatha-bg border border-gaatha-line p-3 text-xs font-lora focus:outline-none focus:ring-1 focus:ring-gaatha-accent cursor-pointer"
                >
                  <option value="all">Any Count</option>
                  <option value="0-50">Up to 50 Works</option>
                  <option value="51-150">51 - 150 Works</option>
                  <option value="150+">150+ Works</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-20 pb-24">
        {filteredArtisans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredArtisans.map((artisan: Artisan) => (
              <div 
                key={artisan.id} 
                onClick={() => { if(window.innerWidth < 768) onArtisanSelect(artisan.id) }}
                className="relative bg-white border border-gaatha-line flex flex-col group overflow-hidden shadow-lg h-[480px] rounded-sm cursor-pointer"
              >
                <img 
                  src={artisan.image} 
                  alt={artisan.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 md:group-hover:grayscale-0 md:group-hover:scale-105"
                />
                
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 transition-transform duration-500 md:group-hover:translate-y-full">
                  <h4 className="text-2xl font-normal text-white mb-1 font-playfair">{artisan.name}</h4>
                  <p className="text-xs text-white/80 italic font-lora tracking-widest uppercase">{artisan.role}</p>
                  <div className="mt-3 flex gap-4">
                    <span className="text-[10px] text-white/60 font-bold uppercase">{artisan.experienceYears}Y Exp.</span>
                    <span className="text-[10px] text-white/60 font-bold uppercase">{artisan.location}</span>
                  </div>
                </div>

                <div className="hidden md:flex absolute inset-0 bg-gaatha-ink/90 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex-col justify-center items-center text-center">
                  <h4 className="text-2xl font-normal text-white mb-1 font-playfair transform translate-y-4 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                    {artisan.name}
                  </h4>
                  <p className="text-gaatha-bg/80 font-semibold mb-3 tracking-[0.1em] uppercase text-[10px] font-lora transform translate-y-4 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                    {artisan.role}
                  </p>
                  <div className="w-12 h-[1px] bg-gaatha-bg/40 mb-4 transform scale-x-0 transition-transform duration-500 delay-150 group-hover:scale-x-100" />
                  
                  <p className="text-sm text-gaatha-bg leading-relaxed mb-6 font-lora italic px-2 transform translate-y-4 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
                    "{artisan.bio}"
                  </p>
                  
                  <div className="text-[10px] text-gaatha-bg/60 mb-8 uppercase tracking-[0.2em] font-bold transform translate-y-4 opacity-0 transition-all duration-500 delay-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {artisan.experience} • {artisan.artworksCount} Works
                  </div>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); onArtisanSelect(artisan.id); }}
                    className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gaatha-ink transition-all duration-700 delay-[400ms] opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 text-[10px] tracking-[0.2em] uppercase font-bold active:scale-95"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-gaatha-ink/5 border border-dashed border-gaatha-line rounded-sm">
            <h3 className="text-2xl font-playfair italic text-gaatha-accent mb-4">No artists match your criteria.</h3>
            <button 
              onClick={clearFilters}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gaatha-ink border-b border-gaatha-ink pb-1 hover:text-gaatha-accent hover:border-gaatha-accent transition-colors"
            >
              Reset Archive Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ArtistsPage;
