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
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-[#FFFDF7] rounded-5xl border-3 border-brand-dark shadow-pop p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white text-brand-dark border-2 border-brand-dark flex items-center justify-center hover:bg-gray-100 btn-pop-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-yellow-butter border-3 border-brand-dark shadow-pop-sm flex items-center justify-center font-obviously text-2xl mb-4">
            V
          </div>
          <h2 className="text-3xl font-black uppercase font-obviously tracking-tight mb-1">
            WELCOME TO VIRALYST
          </h2>
          <p className="font-handwritten text-xl text-brand-amber font-bold">
            Sign in to your automated command center.
          </p>
        </div>

        {/* Simple Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-black uppercase text-gray-700 tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-full border-2 border-brand-dark font-semibold text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-amber"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-black uppercase text-gray-700 tracking-wider">
                Password
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your email!"); }} className="text-xs font-bold text-brand-orange hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-11 pr-4 py-3.5 rounded-full border-2 border-brand-dark font-semibold text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-amber"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-4 bg-brand-dark text-white rounded-full font-black text-sm uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Signing In...</span>
            ) : (
              <>
                <span>Log In</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow-gold" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-500 font-medium">
          Protected by VIRALYST Enterprise Auth
        </div>

      </div>
    </div>
  );
}
