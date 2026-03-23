
import React from 'react';
import { User } from '../types';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#F2E6D8] border border-[#D6C7B2] shadow-2xl rounded-sm p-10 text-center">
        <h1 className="text-3xl font-playfair text-[#3E2D1F] mb-2">Portal Access</h1>
        <p className="text-sm font-lora text-[#5A4632] mb-10">Select your role to access the archive management system.</p>
        
        <div className="space-y-4">
          <button 
            onClick={() => onLogin({ id: 'admin-1', name: 'Zahoor Ahmad', role: 'admin' })}
            className="w-full py-4 bg-[#4B3827] text-[#F5F1EA] font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#3E2D1F] transition-all rounded-sm shadow-md"
          >
            Login as Administrator
          </button>
          
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#D6C7B2]"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="px-2 bg-[#F2E6D8] text-[#8A7660]">OR</span></div>
          </div>

          <button 
            onClick={() => onLogin({ id: 'artisan-user-1', name: 'Ali Mir', role: 'artisan', artisanId: 'ali-mir' })}
            className="w-full py-4 border-2 border-[#4B3827] text-[#4B3827] font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#4B3827] hover:text-[#F5F1EA] transition-all rounded-sm"
          >
            Login as Master Artisan
          </button>
        </div>

        <p className="mt-8 text-[10px] text-[#8A7660] leading-relaxed italic">
          Access is restricted to verified cultural heritage practitioners and project administrators. 
          Unauthorized access is logged.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
