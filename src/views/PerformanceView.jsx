import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Share2, 
  Bookmark, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  Award, 
  Zap,
  ArrowUpRight
} from 'lucide-react';
import KineticReelPlayer from '../components/KineticReelPlayer';
import { 
  PERFORMANCE_METRICS, 
  WHAT_IS_WORKING, 
  WHAT_IS_NOT_WORKING, 
  RECOMMENDED_NEXT_MOVES 
} from '../data/mockData';

export default function PerformanceView({ onNavigate, onOpenCreateWithTopic }) {
  const [timeframe, setTimeframe] = useState('week'); // 'week' | 'month'

  const topReels = [
    {
      id: 'top-1',
      rank: '01',
      title: 'Why Meetings Destroy Productivity',
      hook: 'A 30-minute meeting does not cost 30 minutes. It costs 2 hours of cognitive recovery.',
      duration: '23s',
      views: '82.4k',
      shares: '1.8k',
      saves: '2.1k',
      theme: 'pink',
      badge: 'TOP VIRAL WINNER'
    },
    {
      id: 'top-2',
      rank: '02',
      title: 'Stop Doing 24/7 Reels Manually',
      hook: 'POV: You spent 6 hours recording reels today instead of building your actual product.',
      duration: '21s',
      views: '64.1k',
      shares: '920',
      saves: '1.4k',
      theme: 'amber',
      badge: 'HIGH CONVERSION'
    },
    {
      id: 'top-3',
      rank: '03',
      title: 'The Hidden Cost of Tool Overload',
      hook: 'You think you are paying $30/mo for software. You are actually losing $3,400 in context switching.',
      duration: '27s',
      views: '49.2k',
      shares: '750',
      saves: '1.1k',
      theme: 'yellow',
      badge: 'SOLID RESIDUALS'
    }
  ];

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL HEADER & HIGH-VELOCITY MOMENTUM STATEMENT
      ────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-2 border-[#0D0C11] pb-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>EXECUTIVE INTELLIGENCE • IS THIS SHIT WORKING?</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase font-obviously tracking-tight leading-[0.92] text-[#0D0C11]">
            YES. ALGORITHMIC <br />
            <span className="text-[#10B981] underline decoration-4 decoration-[#FAED8F]">MOMENTUM IS +31%.</span>
          </h1>
        </div>

        {/* Timeframe Pill Switcher */}
        <div className="flex items-center bg-white p-1 rounded-full border-2 border-[#0D0C11] shadow-editorial-sm self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setTimeframe('week')}
            className={`px-5 py-2 rounded-full font-mono text-xs font-black uppercase tracking-wider transition-all ${
              timeframe === 'week' ? 'bg-[#0D0C11] text-white' : 'text-[#2A2930] hover:text-black'
            }`}
          >
            Past 7 Days
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('month')}
            className={`px-5 py-2 rounded-full font-mono text-xs font-black uppercase tracking-wider transition-all ${
              timeframe === 'month' ? 'bg-[#0D0C11] text-white' : 'text-[#2A2930] hover:text-black'
            }`}
          >
            Past 30 Days
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CORE METRICS STRIP (HIGH PRESENCE NUMBERS)
      ────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'TOTAL VIEWS', val: timeframe === 'week' ? '248.5K' : '892.4K', change: '+28%', up: true },
          { label: 'UNIQUE REACH', val: timeframe === 'week' ? '180.2K' : '640.1K', change: '+31%', up: true },
          { label: 'AVG ENGAGEMENT', val: '8.4%', change: '+1.2%', up: true },
          { label: 'NEW AUDIENCE', val: timeframe === 'week' ? '+1,420' : '+4,890', change: '+15%', up: true },
          { label: 'TOTAL SHARES', val: '4,820', change: '+42%', up: true },
          { label: 'BOOKMARK SAVES', val: '2,940', change: '+19%', up: true }
        ].map((stat, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-4xl bg-white border-2 border-[#0D0C11] shadow-editorial flex flex-col justify-between"
          >
            <div className="text-[10px] font-mono font-bold uppercase text-[#6B6875] tracking-wider">
              {stat.label}
            </div>
            <div className="text-2xl sm:text-3xl font-black font-obviously text-[#0D0C11] mt-2 mb-1">
              {stat.val}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono font-black text-[#10B981]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{stat.change} VELOCITY</span>
            </div>
          </div>
        ))}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BEST PERFORMING CONTENT (SHOWN AS ACTUAL MEDIA SLABS!)
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#0D0C11] pb-4">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875]">
              VERIFIED RESIDUAL CHAMPIONS
            </div>
            <h2 className="font-obviously text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0D0C11]">
              THE WINNERS PODIUM
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-[#FF5500]">REAL MEDIA PREVIEWS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topReels.map((reel) => (
            <div
              key={reel.id}
              className="p-6 rounded-5xl bg-white border-3 border-[#0D0C11] shadow-editorial-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#0D0C11] text-[#FAED8F] font-obviously font-black flex items-center justify-center text-xs">
                    {reel.rank}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAED8F] text-[#0D0C11] text-[9px] font-mono font-black uppercase border border-[#0D0C11]">
                    {reel.badge}
                  </span>
                </div>

                {/* 9:16 Video preview */}
                <div className="w-full h-48 rounded-3xl border-2 border-[#0D0C11] overflow-hidden mb-4 shadow-editorial-sm">
                  <KineticReelPlayer
                    reel={{
                      title: reel.title,
                      hook: reel.hook,
                      duration: reel.duration,
                      videoTheme: reel.theme,
                      stats: { views: reel.views }
                    }}
                    compact={true}
                    interactive={false}
                  />
                </div>

                <h3 className="font-obviously text-lg font-black uppercase leading-tight mb-2 text-[#0D0C11]">
                  {reel.title}
                </h3>

                <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#0D0C11]/10 text-xs font-mono font-bold text-[#0D0C11] flex justify-between mb-4">
                  <span>🔥 {reel.views}</span>
                  <span>↗ {reel.shares}</span>
                  <span>★ {reel.saves}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenCreateWithTopic(`Followup breakdown on ${reel.title}`)}
                className="w-full py-2.5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase btn-editorial-sm flex items-center justify-center gap-2"
              >
                <span>Synthesize Followup</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FAED8F]" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHAT IS WORKING VS WHAT IS NOT WORKING (PLAIN ENGLISH)
      ────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* WHAT IS WORKING */}
        <div className="p-8 rounded-5xl bg-[#FAED8F] border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#0D0C11]" />
              <h3 className="font-obviously text-2xl uppercase font-black text-[#0D0C11]">
                WHAT IS PROPAGATING
              </h3>
            </div>
            <p className="text-xs font-mono font-bold text-[#0D0C11]/70 mb-6">
              Mechanics actively amplified by the short-form recommendation feed:
            </p>

            <ul className="space-y-3.5">
              {WHAT_IS_WORKING.map((item, idx) => (
                <li key={idx} className="p-4 rounded-2xl bg-white border-2 border-[#0D0C11] text-xs font-bold text-[#0D0C11] leading-snug flex items-start gap-3 shadow-editorial-sm">
                  <span className="text-[#10B981] font-black text-sm">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-[#0D0C11]/20 text-[11px] font-mono font-bold text-[#0D0C11]">
            ✦ Autonomous generators pre-calibrate to these parameters.
          </div>
        </div>

        {/* WHAT IS NOT WORKING */}
        <div className="p-8 rounded-5xl bg-[#FFFDF7] border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-[#FF5500]" />
              <h3 className="font-obviously text-2xl uppercase font-black text-[#0D0C11]">
                WHAT DIES EARLY
              </h3>
            </div>
            <p className="text-xs font-mono font-bold text-[#6B6875] mb-6">
              Anti-patterns eliminated before scripts hit client review:
            </p>

            <ul className="space-y-3.5">
              {WHAT_IS_NOT_WORKING.map((item, idx) => (
                <li key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border-2 border-[#0D0C11] text-xs font-bold text-[#0D0C11] leading-snug flex items-start gap-3 shadow-editorial-sm">
                  <span className="text-[#FF5500] font-black text-sm">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-[#0D0C11]/20 text-[11px] font-mono font-bold text-[#6B6875]">
            ✦ 100% of upcoming production cuts exclude these formats.
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. ACTION DIRECTIVES (CONNECTING DIRECTLY INTO CREATE)
      ────────────────────────────────────────────────────────────── */}
      <section className="p-8 sm:p-10 rounded-5xl bg-[#0D0C11] text-white border-3 border-[#0D0C11] shadow-editorial space-y-6">
        <div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#FAED8F]">
            ACTION DIRECTIVES
          </div>
          <h2 className="font-obviously text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
            RECOMMENDED NEXT MOVES
          </h2>
          <p className="text-xs font-mono text-gray-400 mt-1">
            Execute directly. Each directive links straight into the synthesis studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RECOMMENDED_NEXT_MOVES.map((move) => (
            <div
              key={move.id}
              className="p-6 rounded-4xl bg-white/5 border border-white/20 flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                <h4 className="font-obviously text-base font-black uppercase text-[#FAED8F] leading-snug mb-2">
                  {move.title}
                </h4>
                <p className="text-xs text-gray-300 font-semibold mb-6">
                  Reason: {move.reason}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenCreateWithTopic(move.promptSeed)}
                className="w-full py-3 bg-[#FAED8F] text-[#0D0C11] rounded-full font-black text-xs uppercase tracking-wider btn-editorial flex items-center justify-center gap-2"
              >
                <span>Synthesize From This Insight</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0D0C11]" />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
