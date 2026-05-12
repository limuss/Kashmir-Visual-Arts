
import React from 'react';
import { User } from '../types';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-gaatha-paper border border-gaatha-line shadow-2xl rounded-sm p-10 text-center">
        <h1 className="text-3xl font-playfair text-gaatha-ink mb-2">Portal Access</h1>
        <p className="text-sm font-lora text-gaatha-muted mb-10">Select your role to access the archive management system.</p>
        
        <div className="space-y-4">
          <button 
            onClick={() => onLogin({ id: 'admin-1', name: 'Zahoor Ahmad', role: 'admin' })}
            className="w-full py-4 bg-gaatha-ink text-gaatha-bg font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all rounded-sm shadow-md"
          >
            Login as Administrator
          </button>
          
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gaatha-line"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="px-2 bg-gaatha-paper text-gaatha-muted">OR</span></div>
          </div>

          <button 
            onClick={() => onLogin({ id: 'artisan-user-1', name: 'Ali Mir', role: 'artisan', artisanId: 'ali-mir' })}
            className="w-full py-4 border-2 border-gaatha-ink text-gaatha-ink font-bold uppercase tracking-[0.2em] text-xs hover:bg-gaatha-ink hover:text-gaatha-bg transition-all rounded-sm"
          >
            Login as Master Artisan
          </button>
        </div>

        <p className="mt-8 text-[10px] text-gaatha-muted leading-relaxed italic">
          Access is restricted to verified cultural heritage practitioners and project administrators. 
          Unauthorized access is logged.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
