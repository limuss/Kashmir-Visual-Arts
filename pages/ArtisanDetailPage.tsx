
import React from 'react';
import Hero from '../components/Hero';
import { Artisan } from '../types';

interface ArtisanDetailPageProps {
  artisan: Artisan;
  onBack: () => void;
}

const ArtisanDetailPage: React.FC<ArtisanDetailPageProps> = ({ artisan, onBack }) => {
  if (!artisan) return null;

  // Filter for only live artworks for public viewing
  const liveArtworks = artisan.artworks?.filter(aw => aw.status === 'live') || [];

  return (
    <div className="bg-[#cab89d] min-h-screen">
      <Hero 
        title={artisan.name}
        subtitle={artisan.role}
        image={artisan.image}
        compact
      />

      <main className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Main Info */}
          <div className="md:w-2/3">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-[0.2em] text-[#7B4A2E] uppercase mb-4 block">The Master Artisan</span>
              <h2 className="text-4xl md:text-5xl font-playfair text-[#3E2D1F] mb-6">A Journey of {artisan.experience}</h2>
              <div className="w-20 h-1 bg-[#7B4A2E] mb-8" />
              <p className="text-xl font-lora text-[#4B3827] leading-relaxed italic mb-8">
                "{artisan.bio}"
              </p>
              <div className="space-y-6 text-lg text-[#5A4632] leading-relaxed">
                <p>
                  Rooted in the ancient valleys of Kashmir, {artisan.name} represents a lineage of excellence. 
                  Every piece created in their workshop is a dialogue between history and hand, 
                  where muscle memory meets artistic intuition. 
                </p>
                <p>
                  As a guardian of {artisan.role}, {artisan.name} has spent decades refining techniques 
                  that were nearly lost to time, ensuring that the visual language of our ancestors remains vibrant.
                </p>
              </div>
            </div>

            {artisan.specialties && (
              <div className="mt-12 bg-[#F2E6D8] p-8 md:p-10 shadow-md">
                <h3 className="text-2xl font-playfair text-[#3E2D1F] mb-6">Specialties & Techniques</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {artisan.specialties.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#7B4A2E]" />
                      <span className="text-[#5A4632] font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Profile Meta */}
          <div className="md:w-1/3 space-y-8">
            <div className="bg-[#4B3827] text-[#F5F1EA] p-8 shadow-xl">
              <h3 className="text-xl font-playfair mb-6 border-b border-[#F5F1EA]/20 pb-4">Artisan Credentials</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#E2D7C6] uppercase tracking-widest opacity-60 mb-1">Current Role</p>
                  <p className="text-lg">{artisan.role}</p>
                </div>
                <div>
                  <p className="text-xs text-[#E2D7C6] uppercase tracking-widest opacity-60 mb-1">Years in Practice</p>
                  <p className="text-lg">{artisan.experience}</p>
                </div>
                <div>
                  <p className="text-xs text-[#E2D7C6] uppercase tracking-widest opacity-60 mb-1">Region</p>
                  <p className="text-lg">{artisan.location}, Kashmir</p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 p-8 border border-white/50">
              <h4 className="font-bold text-[#3E2D1F] mb-3">Support this Artisan</h4>
              <p className="text-sm text-[#7a6041] mb-6">Connect directly with the workshop for custom commissions or heritage acquisitions.</p>
              <button className="w-full py-3 bg-[#7B4A2E] text-white hover:bg-[#5C331E] transition-colors text-sm font-bold tracking-widest uppercase">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* --- SECTION: Artisan's Gallery --- */}
        <section className="mt-24 md:mt-32">
          <div className="flex flex-col mb-12">
             <span className="text-xs font-bold tracking-[0.3em] text-[#7B4A2E] uppercase mb-4">Original Works</span>
             <h2 className="text-4xl md:text-5xl font-playfair text-[#3E2D1F] mb-6">{artisan.name}'s Art</h2>
             <div className="w-24 h-1 bg-[#4B3827]" />
          </div>

          {liveArtworks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {liveArtworks.map((artwork) => (
                <div key={artwork.id} className="bg-[#F2E6D8] border border-[#D6C7B2] shadow-sm flex flex-col group overflow-hidden active:scale-[0.99] transition-all">
                  <div className="h-72 overflow-hidden relative">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 right-4 bg-[#7B4A2E] text-white px-3 py-1 text-sm font-bold font-lora shadow-md">
                      {artwork.price}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-playfair text-[#3E2D1F] mb-3">{artwork.title}</h3>
                    <p className="text-sm text-[#5A4632] font-lora leading-relaxed mb-6 italic flex-grow">
                      {artwork.description}
                    </p>
                    <button className="w-full py-3 bg-[#3E2D1F] text-[#F5F1EA] text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-sm">
                      Purchase this Artwork
                    </button>
                    <button className="w-full mt-2 py-2 text-[#4B3827] text-[10px] font-bold uppercase tracking-widest hover:underline">
                      View full details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white/30 border border-dashed border-[#D6C7B2] rounded-sm">
               <p className="font-lora italic text-[#8A7660]">This artisan's digital catalog is currently being updated. Check back soon to view and acquire new works.</p>
            </div>
          )}
        </section>

        <div className="mt-20 pt-10 border-t border-[#D6C7B2] flex justify-center">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[#7B4A2E] font-bold hover:text-[#3E2D1F] transition-all"
          >
            <span className="text-xl transform group-hover:-translate-x-1 transition-transform">←</span>
            <span className="border-b border-transparent group-hover:border-[#3E2D1F] pb-1">Return to Archive</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ArtisanDetailPage;
