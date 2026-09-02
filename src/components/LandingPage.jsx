import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Pause, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Volume2, 
  VolumeX,
  CheckCircle2,
  Zap,
  TrendingUp,
  Cpu,
  Bot,
  Video,
  BarChart3,
  Sliders,
  Smile
} from 'lucide-react';

export default function LandingPage({ onEnterApp, onOpenLogin }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likesCount, setLikesCount] = useState(82410);
  const [hasLiked, setHasLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  // Automatic increment for likes to feel alive
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setLikesCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleLike = () => {
    if (hasLiked) {
      setLikesCount(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDF7] text-brand-dark overflow-x-hidden selection:bg-brand-yellow-butter">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER / NAVIGATION
      ────────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#FFFDF7]/90 backdrop-blur-md border-b-2 border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-2xl bg-brand-yellow-butter border-2 border-brand-dark shadow-pop-sm flex items-center justify-center font-obviously text-xl">
              V
            </div>
            <span className="font-obviously text-2xl tracking-tighter uppercase font-black">
              VIRALYST
            </span>
          </div>

          {/* Center Pill Nav - Inspired by Aardvark tags */}
          <nav className="hidden md:flex items-center gap-2">
            <a href="#overview" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-yellow-light transition-colors">
              How It Works
            </a>
            <a href="#manager" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-pink-soft transition-colors">
              AI Manager
            </a>
            <a href="#comparison" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-cyan-ice transition-colors">
              Agency vs Us
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 text-xs font-black uppercase tracking-wider hover:text-brand-orange transition-colors"
            >
              Log in
            </button>
            <button
              onClick={onEnterApp}
              className="px-6 py-2.5 bg-brand-dark text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center gap-2"
            >
              <span>Enter App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION WITH MULTI-SHADE WARM WAVES
      ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-8 pb-24 md:pt-16 md:pb-36 overflow-hidden">
        
        {/* Layered Multi-Tone Waves Background (Reference Image 2 Palette) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            viewBox="0 0 1440 860"
            fill="none"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            {/* Top wave shade: Pale yellow */}
            <path
              d="M0,0 L1440,0 L1440,420 C1100,560 820,310 490,490 C220,640 90,470 0,550 Z"
              fill="#FFF8D6"
            />
            {/* Middle wave shade: Warm butter gold */}
            <path
              d="M0,280 C260,180 580,480 920,320 C1210,180 1340,360 1440,300 L1440,780 C1220,620 960,820 620,710 C320,610 120,770 0,690 Z"
              fill="#FAED8F"
              opacity="0.8"
            />
            {/* Deep wave curve: Mango amber */}
            <path
              d="M0,520 C340,440 680,690 1020,540 C1240,440 1380,590 1440,510 L1440,860 L0,860 Z"
              fill="#FDE047"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Pill Tags Bar (Exact Reference Image 1 Style) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <span className="pill-badge">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Culture & Education
            </span>
            <span className="pill-badge bg-[#FAED8F]">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
              Automated Pipeline
            </span>
            <span className="pill-badge">
              Zero Burnout
            </span>
            <span className="pill-badge bg-[#CFFAFE]">
              <Zap className="w-3.5 h-3.5 text-cyan-600" />
              10x Virality
            </span>
            <span className="pill-badge hidden sm:inline-flex">
              3D & Transitions
            </span>
            <span className="pill-badge hidden md:inline-flex bg-[#FCE7F3]">
              Human Taste
            </span>
          </div>

          {/* Center Main Headline in Obviously Extended Black style */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-dark leading-[0.95] mb-6">
              EXPAND ONLINE. <br />
              <span className="text-brand-orange underline decoration-wavy decoration-[#FAED8F] decoration-4">
                WITHOUT MAKING
              </span> <br />
              REELS 24/7.
            </h1>

            <p className="font-handwritten text-2xl sm:text-3xl md:text-4xl text-brand-amber font-bold mb-6 rotate-[-1.5deg]">
              Because human agencies cost too much and burnout kills startups.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              VIRALYST is the autonomous social media management engine. We research niche angles, synthesize viral video hooks, and keep your brand buzzing while you actually build.
            </p>

            {/* THE BIG ENTER BUTTON */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onEnterApp}
                className="w-full sm:w-auto px-10 py-5 bg-brand-dark text-white rounded-full font-black text-xl uppercase tracking-wider border-3 border-brand-dark btn-pop flex items-center justify-center gap-3 group"
              >
                <span>Enter VIRALYST</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2 text-brand-yellow-gold" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('phone-showcase');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-5 bg-white text-brand-dark rounded-full font-black text-base uppercase tracking-wider border-2 border-brand-dark btn-pop-sm flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-brand-dark" />
                <span>See It In Action</span>
              </button>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              3. SMARTPHONE MOCKUP WITH SOCIAL MEDIA APP (The "Book" equivalent)
          ────────────────────────────────────────────────────────────── */}
          <div id="phone-showcase" className="mt-14 relative flex justify-center items-center">
            
            {/* Playful background decorative stickers */}
            <div className="absolute -left-4 sm:left-12 top-1/4 hidden lg:block bg-white p-4 rounded-3xl border-2 border-brand-dark shadow-pop rotate-[-12deg] max-w-xs z-20">
              <div className="flex items-center gap-2 text-xs font-black text-emerald-600 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>ALGORITHMIC WINNER</span>
              </div>
              <p className="text-sm font-bold text-brand-dark">
                "Educational breakdown beats storytelling by +38% this week."
              </p>
              <div className="mt-2 text-[10px] text-gray-500 font-mono">
                VIRALYST Intelligence Signal #402
              </div>
            </div>

            <div className="absolute -right-4 sm:right-12 bottom-1/4 hidden lg:block bg-[#FCE7F3] p-4 rounded-3xl border-2 border-brand-dark shadow-pop rotate-[10deg] max-w-xs z-20">
              <div className="flex items-center gap-2 text-xs font-black text-pink-600 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>AUTOMATIC CAPTIONING</span>
              </div>
              <p className="text-sm font-bold text-brand-dark">
                Zero manual filming required. Formats adapted directly to your audience.
              </p>
              <div className="mt-2 text-[10px] text-gray-500 font-mono">
                100% Client-Approved
              </div>
            </div>

            {/* The Smartphone Frame */}
            <div className="relative w-[300px] sm:w-[340px] md:w-[380px] h-[620px] sm:h-[680px] bg-brand-dark rounded-[50px] p-4 border-4 border-brand-dark shadow-pop-hover transform transition-transform duration-500 hover:rotate-1">
              
              {/* Phone Speaker & Dynamic Island */}
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gray-800 mr-2" />
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Screen Content - Vertical Reel Player */}
              <div className="relative w-full h-full bg-gradient-to-b from-amber-500 via-orange-600 to-slate-900 rounded-[38px] overflow-hidden text-white flex flex-col justify-between p-5 select-none">
                
                {/* Reel Header / App Bar */}
                <div className="relative z-20 pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <div className="w-6 h-6 rounded-full bg-[#FAED8F] text-brand-dark font-black text-xs flex items-center justify-center">
                      V
                    </div>
                    <span className="text-xs font-bold tracking-wide">VIRALYST Feed</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Video Scene Content Simulation */}
                <div className="relative z-10 my-auto text-center px-4">
                  {/* Visual hook badge */}
                  <div className="inline-block bg-[#FAED8F] text-brand-dark px-3 py-1 rounded-full font-black text-xs uppercase tracking-wider mb-4 border border-brand-dark shadow-sm animate-pulse">
                    ⚡ Viral Hook In Progress
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase font-obviously tracking-tight leading-tight mb-4 drop-shadow-md">
                    WHY PRODUCTIVITY APPS MAKE TEAMS SLOWER
                  </h3>

                  <div className="bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-xs sm:text-sm font-semibold leading-snug max-w-[280px] mx-auto text-yellow-200">
                    "The average knowledge worker checks Slack 48 times a day. You aren’t working—you’re managing apps."
                  </div>

                  {/* Audio visualizer bars */}
                  <div className="flex items-center justify-center gap-1.5 mt-6">
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '24px' : '6px', animationDuration: '0.6s' }} />
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '36px' : '6px', animationDuration: '0.8s', animationDelay: '0.2s' }} />
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '18px' : '6px', animationDuration: '0.5s', animationDelay: '0.1s' }} />
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '30px' : '6px', animationDuration: '0.7s', animationDelay: '0.3s' }} />
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '20px' : '6px', animationDuration: '0.9s' }} />
                  </div>
                </div>

                {/* Right Action Icons (Like, Comment, Share) */}
                <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-4">
                  <button onClick={toggleLike} className="flex flex-col items-center gap-1 group">
                    <div className={`w-10 h-10 rounded-full ${hasLiked ? 'bg-pink-600 text-white' : 'bg-black/40 text-white'} backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform group-hover:scale-110`}>
                      <Heart className={`w-5 h-5 ${hasLiked ? 'fill-current' : ''}`} />
                    </div>
                    <span className="text-[10px] font-bold">{(likesCount / 1000).toFixed(1)}k</span>
                  </button>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold">1.4k</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold">2.8k</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Bookmark className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold">1.9k</span>
                  </div>
                </div>

                {/* Reel Bottom Caption & Progress Bar */}
                <div className="relative z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-white text-brand-dark flex items-center justify-center text-xs font-black">
                      YC
                    </div>
                    <span className="text-xs font-black">@startupfounder</span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Automated</span>
                  </div>

                  <p className="text-xs text-white/90 line-clamp-2 mb-3">
                    Most productivity stacks scatter attention across 8 tabs. Here is why Basecamp strips it back to zero...
                  </p>

                  {/* Progress scrubber bar */}
                  <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-300 rounded-full transition-all duration-300"
                      style={{ width: isPlaying ? '68%' : '20%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ARCHED / CIRCULAR ANIMATED TEXT SECTION (Reference Image 5)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative py-12 bg-[#12111A] text-white overflow-hidden">
        {/* Animated Marquee in Chunky Typography */}
        <div className="flex items-center whitespace-nowrap overflow-hidden py-3">
          <div className="flex items-center gap-8 animate-marquee text-2xl sm:text-4xl md:text-5xl font-black uppercase font-obviously tracking-tight text-[#FAED8F]">
            <span>✦ A REEL OUTSIDE OF THE ORDINARY</span>
            <span className="text-white">✦ ZERO RECORDING BURNOUT</span>
            <span className="text-brand-orange">✦ 100% AUTOMATED SCRIPTS</span>
            <span>✦ ALGORITHMICALLY SCORED</span>
            <span className="text-[#67E8F9]">✦ 1-CLICK CLIENT APPROVALS</span>
            <span className="text-[#F472B6]">✦ EXPAND WHILE YOU SLEEP</span>
          </div>
          <div className="flex items-center gap-8 animate-marquee text-2xl sm:text-4xl md:text-5xl font-black uppercase font-obviously tracking-tight text-[#FAED8F]" aria-hidden="true">
            <span>✦ A REEL OUTSIDE OF THE ORDINARY</span>
            <span className="text-white">✦ ZERO RECORDING BURNOUT</span>
            <span className="text-brand-orange">✦ 100% AUTOMATED SCRIPTS</span>
            <span>✦ ALGORITHMICALLY SCORED</span>
            <span className="text-[#67E8F9]">✦ 1-CLICK CLIENT APPROVALS</span>
            <span className="text-[#F472B6]">✦ EXPAND WHILE YOU SLEEP</span>
          </div>
        </div>

        {/* Circular Curved SVG Text Banner (Reference Image 5 Style) */}
        <div className="flex justify-center items-center my-6">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Spinning Curved Path Text */}
            <svg viewBox="0 0 300 300" className="w-full h-full animate-spin-slow">
              <path
                id="circlePath"
                d="M 150, 150 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                fill="none"
              />
              <text fill="#FAED8F" className="text-[13px] font-black uppercase tracking-[0.22em] font-obviously">
                <textPath href="#circlePath" startOffset="0%">
                  ★ VIRALYST ★ AUTOMATED REELS THAT POP ★ NO 24/7 FILMING ★ PURE LEADS ★
                </textPath>
              </text>
            </svg>

            {/* Center interactive badge */}
            <button
              onClick={onEnterApp}
              className="absolute w-28 h-28 rounded-full bg-[#FAED8F] text-brand-dark border-4 border-white shadow-pop flex flex-col items-center justify-center p-2 text-center group hover:scale-105 transition-transform"
            >
              <Smile className="w-7 h-7 mb-1 group-hover:rotate-12 transition-transform" />
              <span className="font-obviously text-xs font-black uppercase leading-tight">
                Enter App
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. PRODUCT ARCHITECTURE / 5 SECTIONS OVERVIEW
             (Home, Manager, Create, Content, Performance)
      ────────────────────────────────────────────────────────────── */}
      <section id="overview" className="relative py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="pill-badge bg-[#FAED8F] mb-4">
              Designed For Clarity
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase font-obviously tracking-tight mb-4">
              5 SECTIONS. <br />
              <span className="text-brand-amber">ZERO MACHINERY EXPOSED.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              You don’t need RAG databases, vector extractors, or technical jargon. You need a command center that tells you what matters, lets you review in seconds, and drives growth.
            </p>
          </div>

          {/* 5 Section Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. HOME */}
            <div className="bg-[#FFF8D6] p-8 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-yellow-butter flex items-center justify-center font-obviously text-xl mb-6">
                  1
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-obviously text-2xl uppercase font-black">HOME</h3>
                  <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-brand-dark font-bold">Command Center</span>
                </div>
                <p className="text-sm text-gray-800 font-medium leading-relaxed mb-4">
                  "Tell me what matters right now." Ridiculously simple. 4-step pipeline status, this week’s wins, and 3 high-impact recommendations.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-dark/20 text-xs font-bold text-gray-700">
                ✦ 1-click approvals & reviews
              </div>
            </div>

            {/* 2. MANAGER */}
            <div className="bg-[#FCE7F3] p-8 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-[#F472B6] flex items-center justify-center font-obviously text-xl mb-6">
                  2
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-obviously text-2xl uppercase font-black">MANAGER</h3>
                  <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-brand-dark font-bold">AI Bot</span>
                </div>
                <p className="text-sm text-gray-800 font-medium leading-relaxed mb-4">
                  The natural-language brain. Ask "What’s performing best?" or command "Schedule this for Friday" with actionable rich cards.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-dark/20 text-xs font-bold text-gray-700">
                ✦ Executes actions, doesn't just chat
              </div>
            </div>

            {/* 3. CREATE */}
            <div className="bg-[#CFFAFE] p-8 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-cyan-300 flex items-center justify-center font-obviously text-xl mb-6">
                  3
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-obviously text-2xl uppercase font-black">CREATE</h3>
                  <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-brand-dark font-bold">Studio</span>
                </div>
                <p className="text-sm text-gray-800 font-medium leading-relaxed mb-4">
                  "What do you want to make?" Single prompt input or pre-vetted VIRALYST suggestions like "Why meetings destroy productivity".
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-dark/20 text-xs font-bold text-gray-700">
                ✦ Clean "Creating your reel" progress
              </div>
            </div>

            {/* 4. CONTENT */}
            <div className="bg-[#F5F3FF] p-8 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-purple-300 flex items-center justify-center font-obviously text-xl mb-6">
                  4
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-obviously text-2xl uppercase font-black">CONTENT</h3>
                  <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-brand-dark font-bold">Workspace</span>
                </div>
                <p className="text-sm text-gray-800 font-medium leading-relaxed mb-4">
                  One clean page. Tabs for In Progress, Ready for Review, Scheduled, and Published. Big video previews and version history.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-dark/20 text-xs font-bold text-gray-700">
                ✦ Approve or Request Changes in 2 taps
              </div>
            </div>

            {/* 5. PERFORMANCE */}
            <div className="bg-[#FEF08A] p-8 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-yellow-300 flex items-center justify-center font-obviously text-xl mb-6">
                  5
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-obviously text-2xl uppercase font-black">PERFORMANCE</h3>
                  <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-brand-dark font-bold">Insights</span>
                </div>
                <p className="text-sm text-gray-800 font-medium leading-relaxed mb-4">
                  "Is this shit working?" Real metrics that matter: views, reach, shares, and plain-English insights on what works and what to avoid.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-dark/20 text-xs font-bold text-gray-700">
                ✦ "Create content from this" action links
              </div>
            </div>

            {/* ESSENTIALS CARD */}
            <div className="bg-brand-dark text-white p-8 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAED8F] text-brand-dark flex items-center justify-center font-obviously text-xl mb-6">
                  ✦
                </div>
                <h3 className="font-obviously text-2xl uppercase font-black mb-2 text-[#FAED8F]">ESSENTIALS</h3>
                <p className="text-sm text-gray-300 font-medium leading-relaxed mb-4">
                  Settings, Notifications, 4-step Business Onboarding, Brand Preferences, and Team Roles without unnecessary clutter.
                </p>
              </div>
              <button
                onClick={onEnterApp}
                className="w-full py-3 bg-[#FAED8F] text-brand-dark rounded-full font-black text-xs uppercase tracking-wider btn-pop flex items-center justify-center gap-2"
              >
                <span>Launch Demo Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. COMPARISON: TRADITIONAL AGENCY VS VIRALYST
      ────────────────────────────────────────────────────────────── */}
      <section id="comparison" className="relative py-24 bg-[#FFF8D6] border-y-3 border-brand-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="pill-badge bg-white mb-3">
              The Hard Truth
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-obviously tracking-tight mb-4">
              WHY FOUNDERS DITCH TRADITIONAL AGENCIES
            </h2>
            <p className="text-gray-800 font-medium">
              Human costs are sky-high, communication is slow, and nobody wants to be on camera 5 days a week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="bg-white/80 p-8 rounded-4xl border-2 border-brand-dark shadow-pop flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  The Old Agency Way
                </div>
                <h3 className="text-2xl font-black uppercase font-obviously mb-6 text-gray-900">
                  $4,500/mo & Endless Headaches
                </h3>

                <ul className="space-y-4 text-sm font-semibold text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Requires founder to record 20+ video takes every single weekend.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Takes 10–14 days for editors to deliver a single 30s cut.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Endless back-and-forth Slack threads asking for "approval".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>High agency overhead and junior contractors doing the actual work.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500">
                Result: Founder burnout & stalled organic growth.
              </div>
            </div>

            {/* The VIRALYST Way */}
            <div className="bg-[#FAED8F] p-8 rounded-4xl border-3 border-brand-dark shadow-pop flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  The VIRALYST Autonomous Engine
                </div>
                <h3 className="text-2xl font-black uppercase font-obviously mb-6 text-brand-dark">
                  Pure Organic Reach On Autopilot
                </h3>

                <ul className="space-y-4 text-sm font-bold text-brand-dark">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span>Zero manual recording required; AI synthesizes proven on-brand video hooks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span>New reels generated in seconds with built-in algorithmic virality checks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span>AI Manager acts as your natural-language executive partner 24/7.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span>Simple 1-tap approvals: Approve, Request Changes, or Auto-Schedule.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-dark/20 flex items-center justify-between">
                <span className="text-xs font-bold">Result: 10x output, 0% founder exhaustion.</span>
                <button
                  onClick={onEnterApp}
                  className="px-4 py-2 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm"
                >
                  Experience It
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. BOTTOM CALL TO ACTION WITH GIANT ENTER BUTTON
      ────────────────────────────────────────────────────────────── */}
      <section className="relative py-28 bg-brand-dark text-white text-center overflow-hidden">
        
        {/* Decorative Wave Transition on Top */}
        <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none">
          <svg viewBox="0 0 1440 48" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,0 C360,48 1080,48 1440,0 L1440,0 L0,0 Z" fill="#FFF8D6" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="pill-badge bg-[#FAED8F] text-brand-dark mb-6">
            Ready to expand online?
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-obviously tracking-tight text-white mb-6">
            STEP INSIDE YOUR <br />
            <span className="text-[#FAED8F]">COMMAND CENTER.</span>
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-brand-orange font-bold mb-8">
            Click once. See Home, Manager, Create, Content, and Performance live.
          </p>

          <button
            onClick={onEnterApp}
            className="px-12 py-6 bg-[#FAED8F] text-brand-dark rounded-full font-black text-2xl uppercase tracking-wider border-4 border-white btn-pop hover:scale-105 transition-all inline-flex items-center gap-4 group"
          >
            <span>Enter VIRALYST Now</span>
            <ArrowRight className="w-7 h-7 text-brand-orange transition-transform group-hover:translate-x-2" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-400 font-mono">
            <span>No Credit Card Required</span>
            <span>•</span>
            <span>Instant Demo Access</span>
            <span>•</span>
            <span>100% Interactive</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/60 py-10 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-obviously text-white text-base">
            <div className="w-6 h-6 rounded-lg bg-[#FAED8F] text-brand-dark flex items-center justify-center font-bold text-xs">
              V
            </div>
            VIRALYST
          </div>
          <p>© 2026 VIRALYST Technologies. Inspired by cheerful indie craftsmanship.</p>
          <div className="flex gap-4">
            <button onClick={onOpenLogin} className="hover:text-white transition-colors">Client Login</button>
            <button onClick={onEnterApp} className="hover:text-white transition-colors">Workspace</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
