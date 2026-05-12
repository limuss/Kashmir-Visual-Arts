
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { 
  Send, 
  RefreshCw, 
  Network, 
  Image as ImageIcon, 
  Hand, 
  Link as LinkIcon, 
  ShoppingCart 
} from 'lucide-react';
import Hero from '../components/Hero';
import { ArtForm, Artisan } from '../types';

interface ArtFormDetailPageProps {
  artForm: ArtForm;
  onBack: () => void;
  onExploreArtisans: (craftName: string) => void;
  onArtisanSelect: (id: string) => void;
  artisans: Artisan[];
  allArtForms: ArtForm[];
  onArtFormSelect: (id: string) => void;
}

const ArtFormDetailPage: React.FC<ArtFormDetailPageProps> = ({ 
  artForm, 
  onBack, 
  onExploreArtisans, 
  onArtisanSelect, 
  artisans,
  allArtForms,
  onArtFormSelect
}) => {
  const [isUsageOpen, setIsUsageOpen] = useState(false);
  const [isSignificanceOpen, setIsSignificanceOpen] = useState(false);
  const [isLoreOpen, setIsLoreOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const [isTypesOpen, setIsTypesOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeTag, setActiveTag] = useState('CRAFTS');
  
  const relevantArtisans = artisans.filter(a => a.role.toLowerCase().includes(artForm.name.toLowerCase().split(' ')[0].toLowerCase()));
  const otherCrafts = allArtForms.filter(f => f.id !== artForm.id);

  const scrollToSection = (id: string, tagName: string) => {
    setActiveTag(tagName);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!artForm) return null;

  const tags = [
    { name: 'CRAFTS', icon: <Send size={16} />, id: 'introduction' },
    { name: 'PROCESS', icon: <RefreshCw size={16} />, id: 'process', exists: !!artForm.process },
    { name: 'CLUSTER', icon: <Network size={16} />, id: 'significance' },
    { name: 'GALLERY', icon: <ImageIcon size={16} />, id: 'usage' },
    { name: 'CRAFTSMEN', icon: <Hand size={16} />, id: 'masters' },
    { name: 'REFERENCE', icon: <LinkIcon size={16} />, id: 'lore' },
    { name: 'SHOP', icon: <ShoppingCart size={16} />, id: 'products', exists: !!artForm.products },
  ];

  return (
    <div className="bg-gaatha-bg min-h-screen">
      <Hero 
        title={artForm.name}
        subtitle={`The traditional Kashmiri ${artForm.name} craft.`}
        image={artForm.image}
        compact
      />

      <main className="max-w-[1300px] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* --- TAG NAVIGATION --- */}
        <div className="flex flex-wrap gap-3 mb-10 md:mb-12 overflow-x-auto pb-2 no-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => scrollToSection(tag.id, tag.name)}
              disabled={tag.exists === false}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-bold text-xs tracking-widest transition-all border whitespace-nowrap ${
                tag.exists === false ? 'opacity-30 cursor-not-allowed' : 
                activeTag === tag.name 
                  ? 'bg-gaatha-red text-white border-gaatha-red shadow-md' 
                  : 'bg-[#F9E79F] text-gaatha-ink border-[#E9D78F] hover:bg-[#F7DC6F] hover:border-[#D7C65F]'
              }`}
            >
              {tag.icon}
              {tag.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12">
          {/* --- LEFT COLUMN: MAIN CONTENT --- */}
          <div className="lg:col-span-2 order-1">
            <section id="introduction" className="flex flex-col gap-8 mb-16 md:mb-20">
              <div className="w-full">
                <h2 className="text-2xl md:text-3xl font-bold font-playfair text-gaatha-red mb-6">Introduction:</h2>
                <div className="font-lora text-lg md:text-xl leading-relaxed text-gaatha-ink/90 italic">
                  <p className="mb-4">{artForm.fullDescription}</p>
                </div>
              </div>
              <div className="w-full">
                <img 
                  src={artForm.image} 
                  alt={artForm.name} 
                  className="w-full h-[300px] md:h-[450px] object-cover border-4 md:border-[10px] border-white/20 shadow-xl rounded-sm"
                />
              </div>
            </section>

            {/* --- PROCESS SECTION (Collapsible) --- */}
            {artForm.process && (
              <section id="process" className="mb-1 border-b border-gaatha-line">
                <button 
                  onClick={() => setIsProcessOpen(!isProcessOpen)}
                  className="w-full py-4 group bg-gaatha-paper hover:bg-gaatha-paper/80 transition-colors"
                >
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-red">The Process</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gaatha-muted uppercase group-hover:text-gaatha-accent transition-colors">
                        {isProcessOpen ? 'Close Section' : 'View Details'}
                      </span>
                      <span className={`text-xl text-gaatha-accent transition-transform duration-500 ${isProcessOpen ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isProcessOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-gaatha-bg"
                    >
                      <div className="px-4 py-10 space-y-12">
                        {artForm.process.map((step, idx) => (
                          <div key={idx} className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                              <h3 className="text-xl font-bold font-playfair text-gaatha-accent mb-3">{step.title}</h3>
                              <p className="font-lora text-lg text-gaatha-ink/80 leading-relaxed">{step.description}</p>
                            </div>
                            <div className="md:w-1/2 w-full">
                              <div className="aspect-video overflow-hidden rounded-sm shadow-lg border border-gaatha-line">
                                <img 
                                  src={step.image} 
                                  alt={step.title} 
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}

            {/* --- USAGE SECTION (Collapsible) --- */}
            {artForm.usage && (
              <section id="usage" className="mb-1 border-y border-gaatha-line">
                <button 
                  onClick={() => setIsUsageOpen(!isUsageOpen)}
                  className="w-full py-4 group bg-gaatha-paper hover:bg-gaatha-paper/80 transition-colors"
                >
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-red">Usage</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gaatha-muted uppercase group-hover:text-gaatha-accent transition-colors">
                        {isUsageOpen ? 'Close Section' : 'View Details'}
                      </span>
                      <span className={`text-xl text-gaatha-accent transition-transform duration-500 ${isUsageOpen ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isUsageOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-gaatha-bg"
                    >
                      <div className="px-4 py-10">
                        <div className="font-lora text-lg md:text-xl leading-relaxed text-gaatha-ink/90 mb-12 markdown-usage">
                          <Markdown>{artForm.usage.text}</Markdown>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {artForm.usage.images.map((img, i) => (
                            <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm shadow-md border border-gaatha-line group/img">
                              <img 
                                src={img} 
                                alt={`Usage ${i+1}`} 
                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}

            {/* --- SIGNIFICANCE SECTION (Collapsible) --- */}
            {artForm.significance && (
              <section id="significance" className="mb-1 border-b border-gaatha-line">
                <button 
                  onClick={() => setIsSignificanceOpen(!isSignificanceOpen)}
                  className="w-full py-4 group bg-gaatha-paper hover:bg-gaatha-paper/80 transition-colors"
                >
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-red">Significance</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gaatha-muted uppercase group-hover:text-gaatha-accent transition-colors">
                        {isSignificanceOpen ? 'Close Section' : 'View Details'}
                      </span>
                      <span className={`text-xl text-gaatha-accent transition-transform duration-500 ${isSignificanceOpen ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isSignificanceOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-gaatha-bg"
                    >
                      <div className="px-4 py-10">
                        <div className="font-lora text-lg md:text-xl leading-relaxed text-gaatha-ink/90 mb-12 markdown-significance">
                          <Markdown>{artForm.significance.text}</Markdown>
                        </div>
                        
                        {artForm.significance.images && artForm.significance.images.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {artForm.significance.images.map((img, i) => (
                              <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm shadow-md border border-gaatha-line group/img">
                                <img 
                                  src={img} 
                                  alt={`Significance ${i+1}`} 
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}

            {/* --- LORE SECTION (Collapsible) --- */}
            {artForm.lore && (
              <section id="lore" className="mb-1 border-b border-gaatha-line">
                <button 
                  onClick={() => setIsLoreOpen(!isLoreOpen)}
                  className="w-full py-4 group bg-gaatha-paper hover:bg-gaatha-paper/80 transition-colors"
                >
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-red">Folklore & Ancient Lore</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gaatha-muted uppercase group-hover:text-gaatha-accent transition-colors">
                        {isLoreOpen ? 'Close Section' : 'View Details'}
                      </span>
                      <span className={`text-xl text-gaatha-accent transition-transform duration-500 ${isLoreOpen ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isLoreOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-gaatha-bg"
                    >
                      <div className="px-4 py-10">
                        <div className="font-lora text-lg md:text-xl leading-relaxed text-gaatha-ink/90 mb-12 markdown-lore">
                          <Markdown>{artForm.lore.text}</Markdown>
                        </div>
                        
                        {artForm.lore.images && artForm.lore.images.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {artForm.lore.images.map((img, i) => (
                              <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm shadow-md border border-gaatha-line group/img">
                                <img 
                                  src={img} 
                                  alt={`Lore ${i+1}`} 
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}

            {/* --- HISTORY SECTION (Collapsible) --- */}
            {artForm.history && (
              <section id="history" className="mb-1 border-b border-gaatha-line">
                <button 
                  onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                  className="w-full py-4 group bg-gaatha-paper hover:bg-gaatha-paper/80 transition-colors"
                >
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-red">History</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gaatha-muted uppercase group-hover:text-gaatha-accent transition-colors">
                        {isHistoryOpen ? 'Close Section' : 'View Details'}
                      </span>
                      <span className={`text-xl text-gaatha-accent transition-transform duration-500 ${isHistoryOpen ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isHistoryOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-gaatha-bg"
                    >
                      <div className="px-4 py-10">
                        <div className="font-lora text-lg md:text-xl leading-relaxed text-gaatha-ink/90 mb-12 markdown-history">
                          <Markdown>{artForm.history.text}</Markdown>
                        </div>
                        
                        {artForm.history.images && artForm.history.images.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {artForm.history.images.map((img, i) => (
                              <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm shadow-md border border-gaatha-line group/img">
                                <img 
                                  src={img} 
                                  alt={`History ${i+1}`} 
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}

            {/* --- DESIGN SECTION (Collapsible) --- */}
            {artForm.design && (
              <section id="design" className="mb-1 border-b border-gaatha-line">
                <button 
                  onClick={() => setIsDesignOpen(!isDesignOpen)}
                  className="w-full py-4 group bg-gaatha-paper hover:bg-gaatha-paper/80 transition-colors"
                >
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-red">Design</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gaatha-muted uppercase group-hover:text-gaatha-accent transition-colors">
                        {isDesignOpen ? 'Close Section' : 'View Details'}
                      </span>
                      <span className={`text-xl text-gaatha-accent transition-transform duration-500 ${isDesignOpen ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isDesignOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-gaatha-bg"
                    >
                      <div className="px-4 py-10">
                        <div className="font-lora text-lg md:text-xl leading-relaxed text-gaatha-ink/90 mb-12 markdown-design">
                          <Markdown>{artForm.design.text}</Markdown>
                        </div>
                        
                        {artForm.design.images && artForm.design.images.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {artForm.design.images.map((img, i) => (
                              <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm shadow-md border border-gaatha-line group/img">
                                <img 
                                  src={img} 
                                  alt={`Design ${i+1}`} 
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}

            {/* --- TYPES SECTION (Collapsible) --- */}
            {artForm.types && (
              <section id="types" className="mb-12 border-b border-gaatha-line">
                <button 
                  onClick={() => setIsTypesOpen(!isTypesOpen)}
                  className="w-full py-4 group bg-gaatha-paper hover:bg-gaatha-paper/80 transition-colors"
                >
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-red">Types of Shawls</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gaatha-muted uppercase group-hover:text-gaatha-accent transition-colors">
                        {isTypesOpen ? 'Close Section' : 'View Details'}
                      </span>
                      <span className={`text-xl text-gaatha-accent transition-transform duration-500 ${isTypesOpen ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isTypesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-gaatha-bg"
                    >
                      <div className="px-4 py-10">
                        {artForm.types.intro && (
                          <p className="font-lora text-lg md:text-xl leading-relaxed text-gaatha-ink/90 mb-8">
                            {artForm.types.intro}
                          </p>
                        )}
                        
                        <div className="space-y-12">
                          {artForm.types.items.map((item, idx) => (
                            <div key={idx} className="border-b border-gaatha-line pb-12 last:border-0">
                              <h3 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-accent mb-4">{item.title}</h3>
                              <p className="font-lora text-lg md:text-xl leading-relaxed text-gaatha-ink/90 mb-6">{item.description}</p>
                              
                              {item.images && item.images.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {item.images.map((img, i) => (
                                    <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm shadow-md border border-gaatha-line group/img">
                                      <img 
                                        src={img} 
                                        alt={`${item.title} ${i+1}`} 
                                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000"
                                        referrerPolicy="no-referrer"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}
            {/* --- PRODUCTS / SHOP SECTION (Collapsible) --- */}
            {artForm.products && (
              <section id="products" className="mb-12 border-b border-gaatha-line">
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full py-4 group bg-gaatha-paper hover:bg-gaatha-paper/80 transition-colors"
                >
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl md:text-2xl font-bold font-playfair text-gaatha-red">Gallery & Shop</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gaatha-muted uppercase group-hover:text-gaatha-accent transition-colors">
                        {isProductsOpen ? 'Close Section' : 'View Details'}
                      </span>
                      <span className={`text-xl text-gaatha-accent transition-transform duration-500 ${isProductsOpen ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-gaatha-bg"
                    >
                      <div className="px-4 py-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                          {artForm.products.map((product, idx) => (
                            <div key={idx} className="group cursor-pointer">
                              <div className="aspect-square overflow-hidden rounded-sm shadow-md border border-gaatha-line mb-3">
                                <img 
                                  src={product.image} 
                                  alt={product.name} 
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <h4 className="font-playfair font-bold text-gaatha-ink text-center group-hover:text-gaatha-accent transition-colors">{product.name}</h4>
                            </div>
                          ))}
                        </div>
                        <div className="mt-10 p-6 bg-[#FDF6D8] border border-[#F9ECC0] rounded-sm text-center">
                          <p className="font-lora italic text-gaatha-ink mb-4">Interested in purchasing authentic Kashmiri crafts?</p>
                          <button className="bg-gaatha-red text-white px-8 py-3 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-gaatha-red/90 transition-all shadow-lg flex items-center gap-2 mx-auto">
                            <ShoppingCart size={18} />
                            Visit Online Store
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}
          </div>

          {/* --- RIGHT COLUMN: SIDEBAR --- */}
          <aside className="lg:col-span-1 order-3 lg:order-2">
            <div className="sticky top-24 space-y-12">
              {/* Artisans Nearby */}
              <section>
                <h3 className="text-xs font-bold tracking-[0.2em] text-gaatha-muted uppercase mb-6 border-b border-gaatha-line pb-2">Artisans Nearby</h3>
                <div className="space-y-6">
                  {relevantArtisans.length > 0 ? (
                    relevantArtisans.slice(0, 4).map((artisan) => (
                      <div 
                        key={artisan.id} 
                        onClick={() => onArtisanSelect(artisan.id)}
                        className="flex gap-4 group cursor-pointer relative"
                      >
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm border border-gaatha-line">
                          <img 
                            src={artisan.image} 
                            alt={artisan.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex flex-col justify-center flex-grow">
                          <h4 className="font-playfair font-bold text-gaatha-ink group-hover:text-gaatha-accent transition-colors text-sm md:text-base leading-tight">{artisan.name}</h4>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="flex text-[10px] text-gaatha-accent">
                              {[...Array(5)].map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                            </div>
                            <span className="text-[10px] text-gaatha-muted">1 Rating</span>
                          </div>
                          <p className="text-[10px] text-gaatha-muted mt-1 flex items-center gap-1">
                            <span className="opacity-60">📍</span> {artisan.location}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-[10px] font-bold text-gaatha-red whitespace-nowrap">0.3 km</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gaatha-muted italic">No artisans found nearby for this craft.</p>
                  )}
                </div>
              </section>

              {/* Crafts Near By */}
              <section>
                <h3 className="text-xs font-bold tracking-[0.2em] text-gaatha-muted uppercase mb-6 border-b border-gaatha-line pb-2">Crafts Near By</h3>
                <div className="space-y-6">
                  {otherCrafts.slice(0, 5).map((craft, idx) => (
                    <div 
                      key={craft.id} 
                      onClick={() => onArtFormSelect(craft.id)}
                      className="flex gap-4 group cursor-pointer relative"
                    >
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm border border-gaatha-line">
                        <img 
                          src={craft.image} 
                          alt={craft.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col justify-center flex-grow">
                        <h4 className="font-playfair font-bold text-gaatha-ink group-hover:text-gaatha-accent transition-colors text-sm md:text-base leading-tight">{craft.name}~Srinagar</h4>
                        <p className="text-[10px] text-gaatha-muted mt-1">Be the first one to rate!</p>
                        <p className="text-[10px] text-gaatha-muted mt-1 flex items-center gap-1">
                          <span className="opacity-60">📍</span> Srinagar-Srinagar
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[10px] font-bold text-gaatha-red whitespace-nowrap">{(0.5 + idx * 0.3).toFixed(1)} km</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </aside>

          {/* --- MASTERS OF THE CRAFT SECTION --- */}
          {relevantArtisans.length > 0 && (
            <section id="masters" className="w-full order-2 lg:order-3 lg:col-span-3 mt-12 lg:mt-20 mb-10">
              <h2 className="text-2xl md:text-3xl font-playfair text-gaatha-accent mb-8 md:mb-10 tracking-widest uppercase border-l-4 border-gaatha-accent pl-4">Masters of the Craft</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relevantArtisans.slice(0, 4).map((artisan, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => onArtisanSelect(artisan.id)}
                    className="bg-gaatha-paper/60 p-4 shadow-sm text-center rounded-sm cursor-pointer hover:bg-gaatha-paper/80 hover:shadow-md active:scale-95 transition-all group border border-gaatha-line"
                  >
                    <div className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden mb-4 border-2 border-gaatha-line">
                      <img 
                        src={artisan.image} 
                        alt={artisan.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h5 className="text-base md:text-lg font-bold text-gaatha-ink mb-1 font-playfair group-hover:text-gaatha-accent transition-colors">{artisan.name}</h5>
                    <p className="text-[10px] md:text-xs text-gaatha-muted uppercase tracking-wider font-bold">{artisan.experience}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <button 
                  onClick={() => onExploreArtisans(artForm.name)}
                  className="bg-transparent border-2 border-gaatha-accent text-gaatha-accent px-8 py-3 font-bold tracking-widest uppercase text-xs hover:bg-gaatha-accent hover:text-white transition-all rounded-sm shadow-md active:scale-95"
                >
                  See all artisans from this art
                </button>
              </div>
            </section>
          )}
        </div>

        <div className="text-center mt-12 md:mt-20 border-t border-gaatha-line pt-12">
          <button 
            onClick={onBack}
            className="text-gaatha-accent font-bold border-b-2 border-gaatha-accent pb-1 hover:text-gaatha-ink hover:border-gaatha-ink transition-all font-lora tracking-widest uppercase text-sm"
          >
            ← Back to Art Forms
          </button>
        </div>
      </main>
    </div>
  );
};

export default ArtFormDetailPage;
