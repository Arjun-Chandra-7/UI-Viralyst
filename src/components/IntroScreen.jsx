import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 600);
    const t2 = setTimeout(() => setStage(2), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F2] overflow-hidden select-none">
      
      {/* Editorial wave lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,200 C300,50 600,350 1000,120 C1300,-50 1500,280 1600,100 L1600,900 L-100,900 Z"
            fill="#FAED8F"
            opacity="0.5"
          />
          <path
            d="M-50,420 C250,280 550,560 920,380 C1250,220 1400,480 1600,360 L1600,900 L-50,900 Z"
            fill="#FACC15"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Floating Tactical Badges */}
      <div className="absolute top-12 left-10 hidden sm:flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-[#0D0C11] shadow-editorial rotate-[-6deg] animate-float">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
        <span className="font-mono text-xs font-bold uppercase tracking-wider">Zero Burnout</span>
      </div>

      <div className="absolute bottom-16 left-12 hidden md:flex items-center gap-2 bg-[#FAED8F] px-4 py-2 rounded-full border-2 border-[#0D0C11] shadow-editorial rotate-[4deg] animate-float" style={{ animationDelay: '1.2s' }}>
        <Sparkles className="w-4 h-4 text-[#FF5500]" />
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D0C11]">No Manual Filming</span>
      </div>

      <div className="absolute top-16 right-12 hidden sm:flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-[#0D0C11] shadow-editorial rotate-[8deg] animate-float" style={{ animationDelay: '0.6s' }}>
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D0C11]">84%+ Completion Rate</span>
      </div>

      {/* Main Mascot & Greeting Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg px-6">
        
        {/* Playful Animated Character */}
        <div className="relative mb-6">
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#FAED8F] rounded-full border-3 border-[#0D0C11] shadow-editorial flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-4 mb-2">
                <div className="w-3.5 h-4 bg-[#0D0C11] rounded-full animate-bounce" style={{ animationDuration: '1.4s' }} />
                <div className="w-3.5 h-4 bg-[#0D0C11] rounded-full animate-bounce" style={{ animationDuration: '1.4s', animationDelay: '0.2s' }} />
              </div>
              <div className="w-9 h-4 border-b-4 border-[#0D0C11] rounded-full" />
            </div>

            {/* Cheek blush */}
            <div className="absolute left-4 top-14 w-3.5 h-2 bg-[#FF5500] rounded-full opacity-50" />
            <div className="absolute right-4 top-14 w-3.5 h-2 bg-[#FF5500] rounded-full opacity-50" />
          </div>

          <div className="absolute -top-2 -right-2 bg-white px-2.5 py-1 rounded-full border-2 border-[#0D0C11] shadow-editorial-sm text-[10px] font-mono font-black uppercase">
            LIVE ✦
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0D0C11] uppercase font-obviously mb-2">
          VIRALYST
        </h1>

        {/* Tagline */}
        <p className="font-obviously text-sm sm:text-base text-[#FF5500] font-black uppercase tracking-wider mb-4">
          Autonomous Short-Form Content Intelligence
        </p>

        <p className="text-sm text-[#6B6875] font-semibold max-w-md mb-8 leading-relaxed">
          Startups and creators shouldn't spend 24/7 in reel filming trenches.
          Step inside your new command center.
        </p>

        {/* Action Button */}
        <button
          onClick={onComplete}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D0C11] text-white rounded-full font-black text-sm uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial hover:bg-black transition-all"
        >
          <span>Explore VIRALYST</span>
          <ArrowRight className="w-4 h-4 text-[#FAED8F] transition-transform group-hover:translate-x-1" />
        </button>

        <p className="mt-4 text-[10px] font-mono font-bold text-[#6B6875] uppercase tracking-widest">
          Click anywhere or tap button to enter
        </p>
      </div>

      {/* Click backdrop to skip intro */}
      <div
        onClick={onComplete}
        className="absolute inset-0 z-0 cursor-pointer"
        title="Click to proceed"
      />
    </div>
  );
}
