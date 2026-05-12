
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
    <header className="bg-gaatha-bg/80 backdrop-blur-md border-b border-gaatha-line py-4 md:py-6 sticky top-0 z-50">
      <div className="gaatha-container flex justify-between items-center">
        {/* Brand Section */}
        <div 
          className="cursor-pointer flex flex-col mr-2 md:mr-8"
          onClick={() => handleLinkClick('home')}
        >
          <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-playfair font-normal text-gaatha-ink tracking-tight whitespace-nowrap leading-none mb-1">
            Kashmiri Visual Arts
          </span>
          <span className="text-[7px] md:text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-gaatha-accent ml-0.5">
            The Archive
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
          {['home', 'art-forms', 'artists', 'explore'].map((page) => (
            <button 
              key={page}
              onClick={() => handleLinkClick(page)}
              className={`text-[9px] xl:text-[11px] font-bold uppercase tracking-[0.2em] xl:tracking-[0.25em] transition-all duration-300 relative group ${
                currentPage === page ? 'text-gaatha-accent' : 'text-gaatha-ink/60 hover:text-gaatha-ink'
              }`}
            >
              {page.replace('-', ' ')}
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-gaatha-accent transition-transform duration-300 origin-left ${
                currentPage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </button>
          ))}
          
          <div className="h-4 w-[1px] bg-gaatha-line mx-1 xl:mx-2" />
          
          {user ? (
            <div className="flex items-center gap-4 xl:gap-8">
              <button 
                onClick={() => handleLinkClick('dashboard')}
                className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                  currentPage === 'dashboard' ? 'text-gaatha-accent underline underline-offset-8' : 'text-gaatha-ink/60 hover:text-gaatha-ink'
                }`}
              >
                Dashboard
              </button>
              
              <button 
                onClick={onLogout}
                className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] text-gaatha-red hover:opacity-70 transition-opacity"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => handleLinkClick('login')}
              className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] text-gaatha-ink hover:text-gaatha-accent transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Login
            </button>
          )}
          
          <button className="text-gaatha-ink/40 hover:text-gaatha-ink transition-colors ml-2 xl:ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gaatha-ink"
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
        <div className="lg:hidden bg-gaatha-bg border-b border-gaatha-line absolute w-full left-0 p-8 flex flex-col gap-6 shadow-2xl animate-fade-in z-50">
          {['home', 'art-forms', 'artists', 'explore'].map((page) => (
            <button 
              key={page}
              onClick={() => handleLinkClick(page)} 
              className={`text-left text-sm font-bold uppercase tracking-[0.3em] py-2 border-b border-gaatha-ink/5 transition-colors ${
                currentPage === page ? 'text-gaatha-accent' : 'text-gaatha-ink'
              }`}
            >
              {page.replace('-', ' ')}
            </button>
          ))}
          
          {user ? (
             <div className="flex flex-col gap-6 mt-4">
               <button 
                 onClick={() => handleLinkClick('dashboard')} 
                 className={`text-left text-sm font-bold uppercase tracking-[0.3em] ${
                   currentPage === 'dashboard' ? 'text-gaatha-accent' : 'text-gaatha-ink'
                 }`}
               >
                 My Dashboard
               </button>
               <button onClick={onLogout} className="text-left text-sm font-bold uppercase tracking-[0.3em] text-gaatha-red">
                 Logout
               </button>
             </div>
          ) : (
             <button 
               onClick={() => handleLinkClick('login')} 
               className="text-left text-sm font-bold uppercase tracking-[0.3em] text-gaatha-ink mt-4"
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
