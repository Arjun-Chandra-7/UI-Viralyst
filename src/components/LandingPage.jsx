import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Bot, 
  Film, 
  ArrowUpRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import KineticReelPlayer from './KineticReelPlayer';

export default function LandingPage({ onEnterApp, onOpenLogin }) {
  const showcaseReel = {
    title: 'Why Productivity Apps Make Teams Slower',
    hook: 'The average knowledge worker checks Slack 48 times a day. You aren’t working—you are managing software.',
    duration: '24s',
    videoTheme: 'amber',
    stats: { views: '82.4k' }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#0D0C11] overflow-x-hidden selection:bg-[#FAED8F] selection:text-[#0D0C11]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL HEADER / TOP BAR
      ────────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-[#0D0C11] px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-2xl bg-[#FAED8F] border-2 border-[#0D0C11] shadow-editorial-sm flex items-center justify-center font-obviously text-xl">
              V
            </div>
            <div>
              <span className="font-obviously text-2xl tracking-tighter uppercase font-black">
                VIRALYST
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono font-bold tracking-widest text-[#6B6875] ml-2">
                AUTONOMOUS SHORT-FORM ENGINE
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider">
            <a href="#hero" className="hover:text-[#FF5500] transition-colors">01. Overview</a>
            <a href="#showcase" className="hover:text-[#FF5500] transition-colors">02. The Reel Slab</a>
            <a href="#architecture" className="hover:text-[#FF5500] transition-colors">03. 5 Core Areas</a>
            <a href="#contrast" className="hover:text-[#FF5500] transition-colors">04. Agency Audit</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0D0C11] hover:text-[#FF5500]"
            >
              Log in
            </button>
            <button
              onClick={onEnterApp}
              className="px-6 py-2.5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial flex items-center gap-2"
            >
              <span>Enter Engine</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FAED8F]" />
            </button>
          </div>

        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION: ASYMMETRIC SCALE & MEDIA-FIRST SHOWCASE
      ────────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative pt-12 pb-24 border-b-2 border-[#0D0C11] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Bold Typography & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1 rounded-full border-2 border-[#0D0C11] shadow-editorial-sm text-[10px] font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Autonomous Content Intelligence</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase font-obviously tracking-tight leading-[0.92] text-[#0D0C11]">
                EXPAND ONLINE. <br />
                <span className="text-[#FF5500] underline decoration-4 decoration-[#FAED8F]">WITHOUT MAKING</span> <br />
                REELS 24/7.
              </h1>

              <p className="text-lg sm:text-xl font-medium text-[#2A2930] max-w-xl leading-relaxed">
                Founders shouldn't spend their lives performing in front of a ring light. VIRALYST observes audience discourse, synthesizes high-voltage video hooks, and automates your entire short-form presence.
              </p>

              {/* The Big Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onEnterApp}
                  className="px-8 py-5 bg-[#0D0C11] text-white rounded-full font-black text-lg uppercase tracking-wider btn-editorial flex items-center justify-center gap-3 group"
                >
                  <span>Enter VIRALYST Studio</span>
                  <ArrowRight className="w-5 h-5 text-[#FAED8F] transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onOpenLogin}
                  className="px-7 py-5 bg-white text-[#0D0C11] rounded-full font-black text-sm uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial-sm flex items-center justify-center gap-2"
                >
                  <span>Client Login</span>
                </button>
              </div>

              <div className="pt-2 flex items-center gap-6 text-[11px] font-mono font-bold text-[#6B6875]">
                <span>NO 24/7 FILMING</span>
                <span>•</span>
                <span>84%+ COMPLETION RATE</span>
                <span>•</span>
                <span>1-CLICK VERDICTS</span>
              </div>

            </div>

            {/* Right Column: The Tactile Short-Form Reel Slab */}
            <div id="showcase" className="lg:col-span-5 flex justify-center">
              <div className="relative w-[300px] sm:w-[340px] h-[600px] rounded-[44px] border-4 border-[#0D0C11] shadow-editorial-lg overflow-hidden bg-[#0D0C11] p-3">
                
                {/* Phone Speaker Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                </div>

                <div className="w-full h-full rounded-[34px] overflow-hidden">
                  <KineticReelPlayer
                    reel={showcaseReel}
                    autoPlay={true}
                    compact={false}
                    interactive={true}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. KINETIC MARQUEE RIBBON (CIRCULAR & ARCHED SIGNAL)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-8 bg-[#0D0C11] text-white overflow-hidden border-b-2 border-[#0D0C11]">
        <div className="flex items-center whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-8 animate-ticker font-obviously text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FAED8F]">
            <span>✦ A REEL OUTSIDE THE ORDINARY</span>
            <span className="text-white">✦ ZERO RECORDING BURNOUT</span>
            <span className="text-[#FF5500]">✦ 100% AUTOMATED SCRIPTS</span>
            <span>✦ ALGORITHMICALLY SCORED</span>
            <span className="text-[#10B981]">✦ 1-CLICK VERDICTS</span>
            <span className="text-white">✦ EXPAND WHILE YOU BUILD</span>
          </div>
          <div className="flex items-center gap-8 animate-ticker font-obviously text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FAED8F]" aria-hidden="true">
            <span>✦ A REEL OUTSIDE THE ORDINARY</span>
            <span className="text-white">✦ ZERO RECORDING BURNOUT</span>
            <span className="text-[#FF5500]">✦ 100% AUTOMATED SCRIPTS</span>
            <span>✦ ALGORITHMICALLY SCORED</span>
            <span className="text-[#10B981]">✦ 1-CLICK VERDICTS</span>
            <span className="text-white">✦ EXPAND WHILE YOU BUILD</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. THE 5 CORE AREAS ARCHITECTURE
      ────────────────────────────────────────────────────────────── */}
      <section id="architecture" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 border-b-2 border-[#0D0C11]">
        
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875] mb-2">
            SIMPLICITY IS STRENGTH
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase font-obviously tracking-tight leading-none text-[#0D0C11]">
            5 PRODUCT AREAS. <br />
            ZERO MACHINERY EXPOSED.
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#6B6875] mt-4">
            We deliberately reject bloated 30-page SaaS dashboards. You interact with five clear environments designed for immediate comprehension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 01. HOME */}
          <div className="p-8 rounded-5xl bg-white border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAED8F] text-[#0D0C11] border-2 border-[#0D0C11] font-obviously font-black flex items-center justify-center text-sm mb-6">
                01
              </div>
              <h3 className="font-obviously text-2xl font-black uppercase mb-2">
                HOME
              </h3>
              <p className="text-sm font-semibold text-[#6B6875] leading-relaxed mb-6">
                "Tell me what matters right now." Spatial status of active reels in flight, this week’s reach velocity, and 1-tap approvals.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0D0C11]/10 text-xs font-mono font-bold text-[#0D0C11]">
              ✦ Zero widget dump
            </div>
          </div>

          {/* 02. MANAGER */}
          <div className="p-8 rounded-5xl bg-white border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FF5500] text-white border-2 border-[#0D0C11] font-obviously font-black flex items-center justify-center text-sm mb-6">
                02
              </div>
              <h3 className="font-obviously text-2xl font-black uppercase mb-2">
                MANAGER
              </h3>
              <p className="text-sm font-semibold text-[#6B6875] leading-relaxed mb-6">
                Natural-language operating partner. Ask "What worked?" and real reel objects materialize directly with executable action triggers.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0D0C11]/10 text-xs font-mono font-bold text-[#0D0C11]">
              ✦ Conversation & Canvas Hybrid
            </div>
          </div>

          {/* 03. CREATE */}
          <div className="p-8 rounded-5xl bg-white border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAED8F] text-[#0D0C11] border-2 border-[#0D0C11] font-obviously font-black flex items-center justify-center text-sm mb-6">
                03
              </div>
              <h3 className="font-obviously text-2xl font-black uppercase mb-2">
                CREATE
              </h3>
              <p className="text-sm font-semibold text-[#6B6875] leading-relaxed mb-6">
                "What do you want to make?" Single expressive prompt input, niche opportunities board, and dynamic 5-phase synthesis state.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0D0C11]/10 text-xs font-mono font-bold text-[#0D0C11]">
              ✦ 5-Stage Human Synthesis
            </div>
          </div>

          {/* 04. CONTENT */}
          <div className="p-8 rounded-5xl bg-white border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#10B981] text-white border-2 border-[#0D0C11] font-obviously font-black flex items-center justify-center text-sm mb-6">
                04
              </div>
              <h3 className="font-obviously text-2xl font-black uppercase mb-2">
                CONTENT
              </h3>
              <p className="text-sm font-semibold text-[#6B6875] leading-relaxed mb-6">
                Unified media-first browser. Staggered 9:16 reel slabs with theater inspection mode, post caption decks, and version history.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0D0C11]/10 text-xs font-mono font-bold text-[#0D0C11]">
              ✦ Theater mode with audio sync
            </div>
          </div>

          {/* 05. PERFORMANCE */}
          <div className="p-8 rounded-5xl bg-white border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#0D0C11] text-[#FAED8F] border-2 border-[#0D0C11] font-obviously font-black flex items-center justify-center text-sm mb-6">
                05
              </div>
              <h3 className="font-obviously text-2xl font-black uppercase mb-2">
                PERFORMANCE
              </h3>
              <p className="text-sm font-semibold text-[#6B6875] leading-relaxed mb-6">
                Answers "Is this working and why?" Raw metrics, top media podium, and plain-English intelligence connecting directly into creation.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0D0C11]/10 text-xs font-mono font-bold text-[#0D0C11]">
              ✦ Insight → Evidence → Action
            </div>
          </div>

          {/* ENTER CTA SLAB */}
          <div className="p-8 rounded-5xl bg-[#0D0C11] text-white border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAED8F] text-[#0D0C11] font-obviously font-black flex items-center justify-center text-sm mb-6">
                ✦
              </div>
              <h3 className="font-obviously text-2xl font-black uppercase mb-2 text-[#FAED8F]">
                LAUNCH ENGINE
              </h3>
              <p className="text-sm text-gray-300 font-semibold leading-relaxed mb-6">
                Experience the live client workspace with zero setup friction.
              </p>
            </div>
            <button
              onClick={onEnterApp}
              className="w-full py-3.5 bg-[#FAED8F] text-[#0D0C11] rounded-full font-black text-xs uppercase btn-editorial flex items-center justify-center gap-2"
            >
              <span>Launch Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. AGENCY AUDIT COMPARISON
      ────────────────────────────────────────────────────────────── */}
      <section id="contrast" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 border-b-2 border-[#0D0C11]">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875] mb-2">
            THE RAW ECONOMIC AUDIT
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-obviously tracking-tight">
            WHY CREATORS & FOUNDERS DITCH TRADITIONAL AGENCIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Traditional Agency */}
          <div className="p-8 sm:p-10 rounded-5xl bg-white border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full font-mono text-[10px] font-black uppercase tracking-wider mb-4 border border-red-200">
                Traditional Agency Model
              </div>
              <h3 className="text-2xl font-black uppercase font-obviously mb-6 text-gray-900">
                $4,500/mo & Founder Exhaustion
              </h3>

              <ul className="space-y-4 text-xs font-bold text-[#6B6875]">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-sm">✕</span>
                  <span>Forces the founder to record 20+ awkward video takes every single Sunday.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-sm">✕</span>
                  <span>Takes 10–14 days for junior editors to return a single 30s draft.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-sm">✕</span>
                  <span>Endless Slack threads discussing minor caption edits.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-mono text-gray-400">
              Outcome: Stalled organic expansion & founder burnout.
            </div>
          </div>

          {/* VIRALYST Autonomous System */}
          <div className="p-8 sm:p-10 rounded-5xl bg-[#FAED8F] border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-[#0D0C11] text-white rounded-full font-mono text-[10px] font-black uppercase tracking-wider mb-4 border border-[#0D0C11]">
                The VIRALYST Autonomous Engine
              </div>
              <h3 className="text-2xl font-black uppercase font-obviously mb-6 text-[#0D0C11]">
                Pure Content Resonance On Autopilot
              </h3>

              <ul className="space-y-4 text-xs font-bold text-[#0D0C11]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                  <span>Zero manual video recording. High-voltage short-form reels synthesized from niche signals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                  <span>Every cut verified for 80%+ completion before you ever see it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
                  <span>AI Manager acts as your dedicated natural-language short-form operator 24/7.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0D0C11]/20 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#0D0C11]">Outcome: 10x output, 0% founder exhaustion.</span>
              <button
                onClick={onEnterApp}
                className="px-5 py-2 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase btn-editorial-sm"
              >
                Launch Now
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. BOTTOM GRAND ENTRANCE CALL TO ACTION
      ────────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0D0C11] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase text-[#FAED8F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Expand Online?</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-obviously tracking-tight leading-none text-white">
            STEP INSIDE YOUR <br />
            <span className="text-[#FAED8F]">COMMAND CENTER.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 font-medium max-w-md mx-auto">
            Click once to access Home, Manager, Create, Content, and Performance.
          </p>

          <button
            onClick={onEnterApp}
            className="px-10 py-5 bg-[#FAED8F] text-[#0D0C11] rounded-full font-black text-xl uppercase tracking-wider border-3 border-white btn-editorial hover:scale-105 transition-all inline-flex items-center gap-3 group mt-4"
          >
            <span>Enter VIRALYST Studio</span>
            <ArrowRight className="w-6 h-6 text-[#FF5500] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Minimal Editorial Footer */}
      <footer className="bg-black text-gray-500 py-8 border-t border-white/10 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-obviously text-white text-sm uppercase">
            <div className="w-5 h-5 rounded-lg bg-[#FAED8F] text-[#0D0C11] flex items-center justify-center font-bold text-xs">
              V
            </div>
            VIRALYST
          </div>
          <div>© 2026 VIRALYST. Engineered with obsessive editorial craft.</div>
          <div className="flex gap-4">
            <button onClick={onOpenLogin} className="hover:text-white transition-colors uppercase">Login</button>
            <button onClick={onEnterApp} className="hover:text-white transition-colors uppercase">Studio</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
