
import React from 'react';
import { ART_FORMS } from '../constants';
import { ArtForm } from '../types';

interface ArtFormsPageProps {
  onArtFormSelect: (id: string) => void;
}

const ArtFormsPage: React.FC<ArtFormsPageProps> = ({ onArtFormSelect }) => {
  return (
    <div className="bg-[#cab89d] min-h-screen">
      {/* Header Section */}
      <section className="pt-16 pb-12 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair text-[#3E2D1F] mb-6">Traditional Art Forms</h1>
        <p className="text-xl font-lora text-[#5A4632] italic leading-relaxed">
          A curated collection of Kashmir's most significant visual heritage, 
          each a testament to centuries of artistic evolution and mastery.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-[#7B4A2E]" />
        </div>
      </section>

      {/* Art Forms Listing - Unique Vertical Layout */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-20 pb-20">
        <div className="space-y-12">
          {ART_FORMS.map((form: ArtForm, idx: number) => (
            <div 
              key={form.id}
              onClick={() => onArtFormSelect(form.id)}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-[#F2E6D8] border border-[#D6C7B2] shadow-xl overflow-hidden group cursor-pointer active:scale-[0.99] transition-all`}
            >
              {/* Image Section */}
              <div className="md:w-1/2 h-[300px] md:h-[500px] overflow-hidden">
                <img 
                  src={form.image} 
                  alt={form.name} 
                  className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-1000 transform md:group-hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7B4A2E] mb-4">Craft Tradition 0{idx + 1}</span>
                <h2 className="text-4xl md:text-5xl font-playfair text-[#3E2D1F] mb-6 group-hover:text-[#7B4A2E] transition-colors">{form.name}</h2>
                <div className="w-16 h-[1px] bg-[#4B3827]/30 mb-8" />
                <p className="text-lg font-lora text-[#5A4632] leading-relaxed mb-10 italic">
                  {form.shortDescription}
                </p>
                <div className="mt-auto">
                  <button className="inline-block px-10 py-4 border-2 border-[#3E2D1F] text-[#3E2D1F] font-bold tracking-[0.2em] uppercase text-xs hover:bg-[#3E2D1F] hover:text-white transition-all rounded-sm">
                    View Archive Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtFormsPage;
