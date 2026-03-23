
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E6D8C4] border-t border-[#D6C7B2] py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-sm text-[#5A4632] font-medium">© 2024 Kashmiri Visual Arts Archive</span>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-[#8B755E] hover:text-[#4B3827] transition-colors">Contact</a>
          <span className="text-[#8A7660]">|</span>
          <a href="#" className="text-[#8B755E] hover:text-[#4B3827] transition-colors">Cultural Heritage Project</a>
          <span className="text-[#8A7660]">|</span>
          <a href="#" className="text-[#8B755E] hover:text-[#4B3827] transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
