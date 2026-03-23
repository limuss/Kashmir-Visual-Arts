
import React, { useState } from 'react';
import { User } from '../types';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#cab89d] border-b border-[#4B3827]/20 py-5 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex justify-between items-center">
        {/* Brand Section */}
        <div 
          className="text-2xl font-playfair font-bold text-[#3E2D1F] cursor-pointer flex items-center"
          onClick={() => handleLinkClick('home')}
        >
          Kashmiri Visual Arts
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleLinkClick('art-forms')}
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${
              currentPage === 'art-forms' ? 'text-[#3E2D1F] border-b-2 border-[#7B4A2E]' : 'text-[#8A7660] hover:text-[#3E2D1F]'
            }`}
          >
            Art Forms
          </button>
          
          <button 
            onClick={() => handleLinkClick('artists')}
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${
              currentPage === 'artists' ? 'text-[#3E2D1F] border-b-2 border-[#7B4A2E]' : 'text-[#8A7660] hover:text-[#3E2D1F]'
            }`}
          >
            Artists
          </button>
          
          <div className="h-6 w-[1px] bg-[#4B3827]/20 mx-2" />
          
          {user ? (
            <div className="flex items-center gap-6">
              <button 
                onClick={() => handleLinkClick('dashboard')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${
                  currentPage === 'dashboard' 
                  ? 'bg-[#3E2D1F] text-white shadow-md' 
                  : 'border border-[#3E2D1F] text-[#3E2D1F] hover:bg-[#3E2D1F] hover:text-white'
                }`}
              >
                {user.role} Dashboard
              </button>
              
              <button 
                onClick={onLogout}
                className="text-xs font-bold uppercase tracking-widest text-[#7B4A2E] hover:underline transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => handleLinkClick('login')}
              className="bg-[#3E2D1F] text-[#F5F1EA] px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black transition-all rounded-sm shadow-md"
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#3E2D1F]"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F2E6D8] border-b border-[#D6C7B2] absolute w-full left-0 p-6 flex flex-col gap-4 shadow-xl animate-fade-in z-50">
          <button onClick={() => handleLinkClick('art-forms')} className="text-left text-lg font-playfair text-[#3E2D1F] py-2 border-b border-black/5">
            Art Forms
          </button>
          <button onClick={() => handleLinkClick('artists')} className="text-left text-lg font-playfair text-[#3E2D1F] py-2 border-b border-black/5">
            Artists
          </button>
          
          {user ? (
             <>
               <button onClick={() => handleLinkClick('dashboard')} className="text-left text-sm font-bold uppercase tracking-widest text-[#7B4A2E] py-2">
                 My Dashboard
               </button>
               <button onClick={onLogout} className="text-left text-sm font-bold uppercase tracking-widest text-[#4B3827] py-2">
                 Logout
               </button>
             </>
          ) : (
             <button 
               onClick={() => handleLinkClick('login')} 
               className="text-left text-sm font-bold uppercase tracking-widest text-[#3E2D1F] py-2"
             >
               Login
             </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
