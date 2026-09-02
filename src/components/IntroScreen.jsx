import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Smile, Heart, Play } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: bouncing mascot, 1: text reveal, 2: ready CTA

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFDF0] overflow-hidden select-none">
      {/* Background organic waves - Multi-shaded warm yellow palette */}
      <div className="absolute inset-0 pointer-events-none opacity-85">
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,200 C300,50 600,350 1000,120 C1300,-50 1500,280 1600,100 L1600,900 L-100,900 Z"
            fill="#FEF3A2"
            opacity="0.7"
          />
          <path
            d="M-50,420 C250,280 550,560 920,380 C1250,220 1400,480 1600,360 L1600,900 L-50,900 Z"
            fill="#FDE047"
            opacity="0.6"
          />
          <path
            d="M-80,620 C200,520 600,750 980,590 C1300,450 1480,680 1600,600 L1600,900 L-80,900 Z"
            fill="#FAED8F"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Floating cheerful stickers */}
      <div className="absolute top-12 left-10 hidden sm:flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-brand-dark shadow-pop rotate-[-6deg] animate-float">
        <Sparkles className="w-5 h-5 text-brand-amber fill-brand-amber" />
        <span className="font-bold text-xs uppercase tracking-wider">Zero Burnout</span>
      </div>

      <div className="absolute bottom-16 left-12 hidden md:flex items-center gap-2 bg-[#FCE7F3] px-4 py-2 rounded-full border-2 border-brand-dark shadow-pop rotate-[4deg] animate-float" style={{ animationDelay: '1.2s' }}>
        <Heart className="w-4 h-4 text-[#EC4899] fill-[#EC4899]" />
        <span className="font-bold text-xs uppercase tracking-wider text-brand-dark">No 24/7 filming</span>
      </div>

      <div className="absolute top-16 right-12 hidden sm:flex items-center gap-2 bg-[#CFFAFE] px-4 py-2 rounded-full border-2 border-brand-dark shadow-pop rotate-[8deg] animate-float" style={{ animationDelay: '0.6s' }}>
        <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping" />
        <span className="font-bold text-xs uppercase tracking-wider text-brand-dark">100% On-Brand</span>
      </div>

      {/* Main Mascot & Greeting Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg px-6">
        {/* Playful Mascot Character */}
        <div className="relative mb-6">
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#FAED8F] rounded-full border-4 border-brand-dark shadow-pop flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Mascot Face */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-4 mb-2">
                <div className="w-3 h-4 bg-brand-dark rounded-full animate-bounce" style={{ animationDuration: '1.4s' }} />
                <div className="w-3 h-4 bg-brand-dark rounded-full animate-bounce" style={{ animationDuration: '1.4s', animationDelay: '0.2s' }} />
              </div>
              <div className="w-8 h-4 border-b-4 border-brand-dark rounded-full" />
            </div>

            {/* Rosy Cheeks */}
            <div className="absolute left-4 top-14 w-3.5 h-2 bg-[#F472B6] rounded-full opacity-60" />
            <div className="absolute right-4 top-14 w-3.5 h-2 bg-[#F472B6] rounded-full opacity-60" />
          </div>

          {/* Little Crown / Sparkle badge */}
          <div className="absolute -top-3 -right-2 bg-white px-2.5 py-1 rounded-full border-2 border-brand-dark shadow-pop-sm text-xs font-black uppercase">
            Hi! ✨
          </div>
        </div>

        {/* Brand Name with Obviously style chunky font */}
        <div className="overflow-hidden mb-2">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-brand-dark uppercase font-obviously transition-all duration-700 transform translate-y-0">
            VIRALYST
          </h1>
        </div>

        {/* Handwritten Tagline */}
        <p className="font-handwritten text-2xl sm:text-3xl text-brand-amber font-bold mb-4 rotate-[-1deg]">
          Automated social growth that feels delightfully human.
        </p>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-700 font-medium max-w-md mb-8 leading-relaxed">
          Because startups and creators shouldn't spend 24/7 in reel trenches.
          Sit back, let AI take the wheel.
        </p>

        {/* Action Button */}
        <button
          onClick={onComplete}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-dark text-white rounded-full font-black text-lg uppercase tracking-wide border-2 border-brand-dark btn-pop hover:bg-black transition-all"
        >
          <span>Explore VIRALYST</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="mt-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
          Click anywhere or press button to begin
        </p>
      </div>

      {/* Click backdrop to skip intro anytime */}
      <div
        onClick={onComplete}
        className="absolute inset-0 z-0 cursor-pointer"
        title="Click to skip"
      />
    </div>
  );
}
