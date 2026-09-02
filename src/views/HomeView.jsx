import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Send, 
  Play, 
  TrendingUp, 
  Bot, 
  Eye, 
  Plus, 
  ArrowUpRight,
  ShieldCheck,
  Flame,
  Radio
} from 'lucide-react';
import KineticReelPlayer from '../components/KineticReelPlayer';

export default function HomeView({ 
  contentList, 
  onNavigate, 
  onReviewContent, 
  onApproveContent, 
  onRequestChanges, 
  onOpenCreateWithTopic 
}) {
  const waitingApprovalItem = contentList.find(c => c.status === 'Ready for Review') || contentList[0];
  const inProgressItems = contentList.filter(c => c.status === 'In Progress');
  const scheduledItems = contentList.filter(c => c.status === 'Scheduled');
  const publishedItems = contentList.filter(c => c.status === 'Published');

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto">
      
      {/* ─────────────────────────────────────────────────────────────
          1. DRAMATIC EDITORIAL MASTHEAD (BREAKING THE SAAS TEMPLATE RHYTHM)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-2 pb-6 border-b-2 border-[#0D0C11]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>ORBITAL FLIGHT MONITOR • LIVE STATUS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-obviously tracking-tight leading-[0.92] text-[#0D0C11]">
              TELL ME WHAT <br />
              <span className="text-[#FF5500] underline decoration-4 decoration-[#FAED8F]">MATTERS NOW.</span>
            </h1>
          </div>

          {/* Contextual Intelligence Statement & Direct Triggers */}
          <div className="lg:max-w-md space-y-4">
            <div className="p-4 bg-white rounded-3xl border-2 border-[#0D0C11] shadow-editorial-sm">
              <div className="text-[10px] font-mono font-bold uppercase text-[#6B6875] mb-1">
                EXECUTIVE SUMMARY
              </div>
              <p className="text-sm font-semibold text-[#0D0C11] leading-relaxed">
                The engine synthesized <span className="font-black text-[#FF5500]">6 reels</span> this week. <span className="font-black">1 cut requires your verdict</span> before Friday broadcast. Organic reach is up <span className="font-black text-[#10B981]">+31%</span>.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('create')}
                className="flex-1 py-3 px-5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase tracking-wider btn-editorial flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4 text-[#FAED8F]" />
                <span>Synthesize Reel</span>
              </button>
              <button
                onClick={() => onNavigate('manager')}
                className="py-3 px-5 bg-[#FAED8F] text-[#0D0C11] rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial-sm flex items-center gap-1.5"
              >
                <Bot className="w-4 h-4" />
                <span>Ask Manager</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE ACTIVE CONTENT CONSTELLATION (SPATIAL VERDICT HERO)
             Oversized Interactive Reel Slab next to Velocity Analytics
      ────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT / CENTERPIECE: The Spotlight Verdict Cinema Slab */}
        <div className="lg:col-span-7 bg-[#FFFDF7] p-6 sm:p-8 rounded-5xl border-3 border-[#0D0C11] shadow-editorial-lg relative overflow-hidden">
          
          {/* Subtle Background Badge */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#0D0C11]/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-ping" />
              <span className="font-obviously text-sm font-black uppercase tracking-wider text-[#FF5500]">
                Requires Client Verdict
              </span>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#6B6875]">
              HOLD SCORE: 88/100
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* The Real-Time Playable Kinetic Reel */}
            <div className="sm:col-span-6 flex justify-center">
              <div className="w-[230px] h-[400px] rounded-[32px] border-3 border-[#0D0C11] shadow-editorial overflow-hidden">
                <KineticReelPlayer 
                  reel={waitingApprovalItem} 
                  autoPlay={true}
                  compact={true}
                />
              </div>
            </div>

            {/* Reel Review Metadata & Actions */}
            <div className="sm:col-span-6 space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6875] block mb-1">
                  Scheduled Target: {waitingApprovalItem.scheduledFor}
                </span>
                <h3 className="font-obviously text-2xl font-black uppercase leading-tight text-[#0D0C11]">
                  {waitingApprovalItem.title}
                </h3>
              </div>

              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#0D0C11]/20 text-xs font-semibold text-[#2A2930] leading-snug">
                "{waitingApprovalItem.hook}"
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-[#6B6875]">Pacing Cadence:</span>
                  <span className="font-bold text-[#0D0C11]">{waitingApprovalItem.duration}</span>
                </div>
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-[#6B6875]">Core Objective:</span>
                  <span className="font-bold text-[#0D0C11]">{waitingApprovalItem.objective}</span>
                </div>
              </div>

              {/* Direct Verdict Actions */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => onApproveContent(waitingApprovalItem.id)}
                  className="w-full py-3 bg-[#10B981] text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve For Broadcast</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onRequestChanges(waitingApprovalItem)}
                    className="flex-1 py-2 bg-white text-[#0D0C11] rounded-full font-bold text-xs uppercase border-2 border-[#0D0C11] btn-editorial-sm"
                  >
                    Request Changes
                  </button>
                  <button
                    onClick={() => onReviewContent(waitingApprovalItem)}
                    className="px-4 py-2 bg-[#FAED8F] text-[#0D0C11] rounded-full font-black text-xs uppercase border-2 border-[#0D0C11] btn-editorial-sm"
                    title="Inspect Cinema Theater"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Momentum Metrics & Autopilot Radar */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Giant Velocity Number Card */}
          <div className="bg-[#FAED8F] p-7 rounded-5xl border-3 border-[#0D0C11] shadow-editorial space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#0D0C11]">
                WEEKLY RESIDUAL MOMENTUM
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#0D0C11] text-[10px] font-black uppercase text-[#10B981]">
                +31% SPIKE
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <div className="text-5xl sm:text-6xl font-black font-obviously tracking-tight text-[#0D0C11]">
                248.5K
              </div>
              <span className="text-xs font-mono font-bold text-[#6B6875]">TOTAL VIEWS</span>
            </div>

            <p className="text-xs font-bold text-[#0D0C11] leading-relaxed border-t border-[#0D0C11]/20 pt-3">
              Educational breakdowns are generating 3.2x more bookmark saves than narrative founder stories. Algorithm rewards the 24s format.
            </p>
          </div>

          {/* High-Impact Directives from VIRALYST Brain */}
          <div className="bg-white p-7 rounded-5xl border-3 border-[#0D0C11] shadow-editorial space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF5500]" />
                <span className="font-obviously text-sm font-black uppercase text-[#0D0C11]">
                  AUTONOMOUS DIRECTIVES
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#6B6875]">TOP SIGNALS</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-3xl bg-[#FAF7F2] border-2 border-[#0D0C11]/20 hover:border-[#0D0C11] transition-all flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#6B6875] mb-1">
                    <span>HOT NICHE PATTERN</span>
                    <span className="text-[#10B981]">HIGH HEAT</span>
                  </div>
                  <h4 className="font-obviously text-base font-black uppercase text-[#0D0C11] leading-tight">
                    Why Meetings Destroy Productivity
                  </h4>
                  <p className="text-xs text-[#6B6875] font-semibold mt-1">
                    Resonating heavily across knowledge workers. Projected to cross 85k views.
                  </p>
                </div>
                <button
                  onClick={() => onOpenCreateWithTopic('Why meetings destroy productivity')}
                  className="self-start px-4 py-1.5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase btn-editorial-sm flex items-center gap-1.5"
                >
                  <span>Synthesize This Angle</span>
                  <ArrowRight className="w-3 h-3 text-[#FAED8F]" />
                </button>
              </div>

              <div className="p-4 rounded-3xl bg-[#FAF7F2] border-2 border-[#0D0C11]/20 hover:border-[#0D0C11] transition-all flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#6B6875] mb-1">
                    <span>CADENCE ADVICE</span>
                    <span>PACING FIX</span>
                  </div>
                  <h4 className="font-obviously text-base font-black uppercase text-[#0D0C11] leading-tight">
                    Shorten Opening Hook To 2.5s
                  </h4>
                  <p className="text-xs text-[#6B6875] font-semibold mt-1">
                    Videos with intros under 3s achieved 78% completion rate this period.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('manager')}
                  className="self-start px-4 py-1.5 bg-white text-[#0D0C11] rounded-full font-black text-xs uppercase border border-[#0D0C11] btn-editorial-sm flex items-center gap-1.5"
                >
                  <span>Instruct Manager</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THE SPATIAL PROPAGATION PIPELINE (NOT 4 IDENTICAL STATUS BOXES)
             Content items shown traveling through real production states
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-white p-7 sm:p-9 rounded-5xl border-3 border-[#0D0C11] shadow-editorial space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#0D0C11]/10 pb-4">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875]">
              CONTINUOUS FLUID PIPELINE
            </div>
            <h2 className="font-obviously text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0D0C11]">
              PROPAGATION STREAM
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <span className="flex items-center gap-1.5 text-[#0D0C11]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              6 REELS TOTAL
            </span>
            <button
              onClick={() => onNavigate('content')}
              className="text-[#FF5500] hover:underline font-black uppercase flex items-center gap-1"
            >
              <span>Full Archive →</span>
            </button>
          </div>
        </div>

        {/* Staggered Spatial Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Stage 1: Ingest & Synthesis */}
          <div 
            onClick={() => onNavigate('content', 'In Progress')}
            className="p-5 rounded-4xl bg-[#FAF7F2] border-2 border-[#0D0C11] shadow-editorial-sm cursor-pointer hover:bg-yellow-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3 text-xs font-mono font-bold">
              <span className="text-[#6B6875]">01 / SYNTHESIZING</span>
              <Clock className="w-4 h-4 text-[#FF9E00]" />
            </div>
            <div className="text-3xl font-black font-obviously text-[#0D0C11] mb-1">
              {inProgressItems.length}
            </div>
            <p className="text-[11px] font-semibold text-[#6B6875] line-clamp-2">
              Autonomous hook tuning & kinetic captions in progress.
            </p>
          </div>

          {/* Stage 2: Ready for Verdict */}
          <div 
            onClick={() => onNavigate('content', 'Ready for Review')}
            className="p-5 rounded-4xl bg-[#FAED8F] border-3 border-[#0D0C11] shadow-editorial cursor-pointer hover:-translate-y-1 transition-transform relative"
          >
            <div className="absolute -top-2.5 right-4 bg-[#FF5500] text-white px-2 py-0.5 rounded-full text-[9px] font-mono font-black uppercase border border-[#0D0C11]">
              ACTION
            </div>
            <div className="flex items-center justify-between mb-3 text-xs font-mono font-black">
              <span className="text-[#0D0C11]">02 / VERDICT REQUIRED</span>
              <AlertCircle className="w-4 h-4 text-[#FF5500]" />
            </div>
            <div className="text-3xl font-black font-obviously text-[#0D0C11] mb-1">
              1
            </div>
            <p className="text-[11px] font-bold text-[#0D0C11] line-clamp-2">
              Requires 1 tap to lock broadcast slot.
            </p>
          </div>

          {/* Stage 3: Scheduled Queue */}
          <div 
            onClick={() => onNavigate('content', 'Scheduled')}
            className="p-5 rounded-4xl bg-[#FAF7F2] border-2 border-[#0D0C11] shadow-editorial-sm cursor-pointer hover:bg-cyan-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3 text-xs font-mono font-bold">
              <span className="text-[#6B6875]">03 / BROADCAST QUEUE</span>
              <Send className="w-4 h-4 text-[#0D0C11]" />
            </div>
            <div className="text-3xl font-black font-obviously text-[#0D0C11] mb-1">
              {scheduledItems.length}
            </div>
            <p className="text-[11px] font-semibold text-[#6B6875] line-clamp-2">
              Optimal time slots booked for maximum save rates.
            </p>
          </div>

          {/* Stage 4: Live & Propagating */}
          <div 
            onClick={() => onNavigate('content', 'Published')}
            className="p-5 rounded-4xl bg-[#FAF7F2] border-2 border-[#0D0C11] shadow-editorial-sm cursor-pointer hover:bg-emerald-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3 text-xs font-mono font-bold">
              <span className="text-[#6B6875]">04 / IN LIVE ORBIT</span>
              <Radio className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-3xl font-black font-obviously text-[#0D0C11] mb-1">
              {publishedItems.length}
            </div>
            <p className="text-[11px] font-semibold text-[#6B6875] line-clamp-2">
              Generating organic discovery & follower velocity.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
