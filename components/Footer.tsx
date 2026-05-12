
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gaatha-bg border-t border-gaatha-line pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-playfair mb-6">Kashmiri Visual Arts Archive</h3>
            <p className="text-gaatha-ink/60 font-lora text-sm leading-loose max-w-sm mb-8">
              A dedicated space for the documentation and preservation of the rich artistic traditions of the Kashmir Valley. We believe in the power of stories to keep heritage alive.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map(social => (
                <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gaatha-ink hover:text-gaatha-accent transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gaatha-accent mb-8">Archive</h4>
            <ul className="flex flex-col gap-4">
              {['Art Forms', 'Artisans', 'Research', 'Stories', 'Exhibitions'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-gaatha-ink/70 hover:text-gaatha-ink transition-colors font-lora">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gaatha-accent mb-8">Newsletter</h4>
            <p className="text-xs text-gaatha-ink/60 font-lora mb-6">Receive updates on new documentation and artisan stories.</p>
            <div className="flex border-b border-gaatha-ink/20 pb-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-transparent text-sm font-lora outline-none flex-grow"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest text-gaatha-accent">Join</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gaatha-line">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gaatha-ink/40">© 2024 Kashmiri Visual Arts Archive</span>
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="text-gaatha-ink/40 hover:text-gaatha-ink transition-colors">Privacy</a>
            <a href="#" className="text-gaatha-ink/40 hover:text-gaatha-ink transition-colors">Terms</a>
            <a href="#" className="text-gaatha-ink/40 hover:text-gaatha-ink transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
