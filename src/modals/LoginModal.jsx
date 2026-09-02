import React, { useState } from 'react';
import { X, ArrowRight, Lock, Mail } from 'lucide-react';

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('arjun@startup.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess();
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0C11]/75 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md bg-[#FAF7F2] rounded-5xl border-3 border-[#0D0C11] shadow-editorial-lg p-8 sm:p-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white text-[#0D0C11] border-2 border-[#0D0C11] flex items-center justify-center hover:bg-gray-100 btn-editorial-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FAED8F] border-2 border-[#0D0C11] shadow-editorial-sm flex items-center justify-center font-obviously text-xl mb-4">
            V
          </div>
          <h2 className="text-3xl font-black uppercase font-obviously tracking-tight mb-1 text-[#0D0C11]">
            WELCOME TO VIRALYST
          </h2>
          <p className="text-xs font-mono font-bold text-[#6B6875] uppercase tracking-wider">
            Sign in to your automated command center
          </p>
        </div>

        {/* Simple Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#6B6875] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-full border-2 border-[#0D0C11] font-bold text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9E00]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[10px] font-mono font-black uppercase text-[#6B6875] tracking-wider">
                Password
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your email!"); }} className="text-[10px] font-mono font-bold text-[#FF5500] hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#6B6875] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-11 pr-4 py-3.5 rounded-full border-2 border-[#0D0C11] font-bold text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9E00]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-4 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Enter Studio</span>
                <ArrowRight className="w-4 h-4 text-[#FAED8F]" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#0D0C11]/10 text-center text-[10px] font-mono text-[#6B6875]">
          Protected by VIRALYST Enterprise Auth
        </div>

      </div>
    </div>
  );
}
