
import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import { ArtForm, Artisan } from '../types';

interface ArtFormDetailPageProps {
  artForm: ArtForm;
  onBack: () => void;
  onExploreArtisans: (craftName: string) => void;
  onArtisanSelect: (id: string) => void;
  artisans: Artisan[];
}

const ArtFormDetailPage: React.FC<ArtFormDetailPageProps> = ({ artForm, onBack, onExploreArtisans, onArtisanSelect, artisans }) => {
  const [displayText, setDisplayText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const typingRef = useRef<any>(null);

  const truncatedText = artForm.fullDescription.slice(0, 150) + "...";
  const fullText = artForm.fullDescription;

  useEffect(() => {
    setDisplayText(truncatedText);
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [artForm, truncatedText]);

  const handleToggle = () => {
    if (!isExpanded) {
      let currentText = truncatedText;
      let charIndex = 150;
      const type = () => {
        if (charIndex < fullText.length) {
          currentText += fullText[charIndex];
          setDisplayText(currentText);
          charIndex++;
          typingRef.current = setTimeout(type, 15);
        } else {
          setIsExpanded(true);
        }
      };
      type();
    } else {
      setDisplayText(truncatedText);
      setIsExpanded(false);
      if (typingRef.current) clearTimeout(typingRef.current);
    }
  };

  const relevantArtisans = artisans.filter(a => a.role.toLowerCase().includes(artForm.name.toLowerCase().split(' ')[0].toLowerCase()));

  if (!artForm) return null;

  return (
    <div className="bg-[#cab89d] min-h-screen">
      <Hero 
        title={artForm.name}
        subtitle={`The traditional Kashmiri ${artForm.name} craft.`}
        image={artForm.image}
        compact
      />

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <section className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair text-[#7b4f3a] mb-6">About {artForm.name}</h2>
            <div className="relative font-lora text-base md:text-lg leading-relaxed text-[#4B3827]">
              <p className="mb-4">{displayText}</p>
              <button 
                onClick={handleToggle}
                className="text-[#7b4f3a] font-bold hover:underline transition-all flex items-center gap-2 mt-4 text-sm md:text-base"
              >
                {isExpanded ? 'Read Less ▲' : 'Read More >>>'}
              </button>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <img 
              src={artForm.image} 
              alt={artForm.name} 
              className="w-full h-[300px] md:h-[400px] object-cover border-4 md:border-[10px] border-white/20 shadow-xl rounded-sm"
            />
          </div>
        </section>

        {relevantArtisans.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-playfair text-[#7b4f3a] mb-8 md:mb-10 tracking-widest uppercase border-l-4 border-[#7b4f3a] pl-4">Masters of the Craft</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relevantArtisans.slice(0, 4).map((artisan, idx) => (
                <div 
                  key={idx} 
                  onClick={() => onArtisanSelect(artisan.id)}
                  className="bg-white/60 p-4 shadow-sm text-center rounded-sm cursor-pointer hover:bg-white/80 hover:shadow-md active:scale-95 transition-all group"
                >
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden mb-4 border-2 border-[#D6C7B2]">
                    <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h5 className="text-base md:text-lg font-bold text-[#3E2D1F] mb-1 font-playfair group-hover:text-[#7b4f3a] transition-colors">{artisan.name}</h5>
                  <p className="text-[10px] md:text-xs text-[#7a6041] uppercase tracking-wider font-bold">{artisan.experience}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <button 
                onClick={() => onExploreArtisans(artForm.name)}
                className="bg-transparent border-2 border-[#7b4f3a] text-[#7b4f3a] px-8 py-3 font-bold tracking-widest uppercase text-xs hover:bg-[#7b4f3a] hover:text-white transition-all rounded-sm shadow-md active:scale-95"
              >
                See all artisans from this art
              </button>
            </div>
          </section>
        )}

        <div className="text-center mt-12 md:mt-20">
          <button 
            onClick={onBack}
            className="text-[#7b4f3a] font-bold border-b-2 border-[#7b4f3a] pb-1 hover:text-[#3E2D1F] hover:border-[#3E2D1F] transition-all font-lora tracking-widest uppercase text-sm"
          >
            ← Back to Art Forms
          </button>
        </div>
      </main>
    </div>
  );
};

export default ArtFormDetailPage;
