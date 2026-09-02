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
  Zap
} from 'lucide-react';
import { 
  PERFORMANCE_METRICS, 
  WHAT_IS_WORKING, 
  WHAT_IS_NOT_WORKING, 
  RECOMMENDED_NEXT_MOVES 
} from '../data/mockData';

export default function PerformanceView({ onNavigate, onOpenCreateWithTopic }) {
  const [timeframe, setTimeframe] = useState('week'); // 'week' | 'month'

  const rankings = [
    {
      rank: '#1',
      title: 'Why Meetings Destroy Productivity',
      views: '82.4k',
      shares: '1.8k',
      saves: '2.1k',
      tag: 'Viral Winner',
      theme: 'amber'
    },
    {
      rank: '#2',
      title: 'Stop Doing 24/7 Reels Manually',
      views: '64.1k',
      shares: '920',
      saves: '1.4k',
      tag: 'Top Converter',
      theme: 'yellow'
    },
    {
      rank: '#3',
      title: 'The 30-Second Attention Span Myth',
      views: '49.2k',
      shares: '750',
      saves: '1.1k',
      tag: 'Consistent Performer',
      theme: 'cyan'
    }
  ];

  return (
    <div className="space-y-8 pb-16 max-w-6xl mx-auto">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER WITH "IS THIS WORKING?" CLARITY
      ────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FEF08A] p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-brand-dark text-xs font-bold uppercase tracking-wider mb-2 text-brand-dark">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Plain-English Intelligence
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-obviously tracking-tight leading-none mb-1">
            IS THIS SHIT WORKING?
          </h1>
          <p className="font-handwritten text-xl sm:text-2xl text-brand-orange font-bold">
            Yes. Your organic reach is beating last month by +31%.
          </p>
        </div>

        {/* Timeframe Toggle */}
        <div className="flex items-center bg-white p-1 rounded-full border-2 border-brand-dark shadow-pop-sm">
          <button
            onClick={() => setTimeframe('week')}
            className={`px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider transition-colors ${
              timeframe === 'week' ? 'bg-brand-dark text-white' : 'text-gray-700 hover:text-black'
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setTimeframe('month')}
            className={`px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider transition-colors ${
              timeframe === 'month' ? 'bg-brand-dark text-white' : 'text-gray-700 hover:text-black'
            }`}
          >
            This Month
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. TOP LEVEL METRICS GRID (VIEWS, REACH, ENGAGEMENT, ETC.)
      ────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        
        {/* Views */}
        <div className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop">
          <div className="text-[11px] font-bold text-gray-500 uppercase">Views</div>
          <div className="text-2xl sm:text-3xl font-black font-obviously text-brand-dark mt-1">
            {timeframe === 'week' ? '248.5K' : '892.4K'}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-black text-emerald-600 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+28%</span>
          </div>
        </div>

        {/* Reach */}
        <div className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop">
          <div className="text-[11px] font-bold text-gray-500 uppercase">Reach</div>
          <div className="text-2xl sm:text-3xl font-black font-obviously text-brand-dark mt-1">
            {timeframe === 'week' ? '180.2K' : '640.1K'}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-black text-emerald-600 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+31%</span>
          </div>
        </div>

        {/* Engagement */}
        <div className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop">
          <div className="text-[11px] font-bold text-gray-500 uppercase">Engagement</div>
          <div className="text-2xl sm:text-3xl font-black font-obviously text-brand-dark mt-1">
            8.4%
          </div>
          <div className="flex items-center gap-1 text-[11px] font-black text-emerald-600 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+1.2%</span>
          </div>
        </div>

        {/* Followers Gained */}
        <div className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop">
          <div className="text-[11px] font-bold text-gray-500 uppercase">Followers</div>
          <div className="text-2xl sm:text-3xl font-black font-obviously text-brand-dark mt-1">
            {timeframe === 'week' ? '+1,420' : '+4,890'}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-black text-emerald-600 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+15%</span>
          </div>
        </div>

        {/* Shares */}
        <div className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop">
          <div className="text-[11px] font-bold text-gray-500 uppercase">Shares</div>
          <div className="text-2xl sm:text-3xl font-black font-obviously text-brand-dark mt-1">
            4,820
          </div>
          <div className="flex items-center gap-1 text-[11px] font-black text-emerald-600 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+42%</span>
          </div>
        </div>

        {/* Saves */}
        <div className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop">
          <div className="text-[11px] font-bold text-gray-500 uppercase">Saves</div>
          <div className="text-2xl sm:text-3xl font-black font-obviously text-brand-dark mt-1">
            2,940
          </div>
          <div className="flex items-center gap-1 text-[11px] font-black text-emerald-600 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+19%</span>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. BEST-PERFORMING CONTENT (SIMPLE RANKINGS)
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-white p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-brand-amber" />
            <h2 className="text-xl sm:text-2xl font-black uppercase font-obviously tracking-tight">
              TOP PERFORMING REELS
            </h2>
          </div>
          <span className="text-xs font-bold text-gray-500">Sorted by algorithm velocity</span>
        </div>

        <div className="space-y-3">
          {rankings.map((item) => (
            <div
              key={item.rank}
              className="p-4 sm:p-5 rounded-3xl border-2 border-brand-dark bg-[#FFFDF7] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FFF8D6] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-dark text-[#FAED8F] font-obviously font-black text-lg flex items-center justify-center flex-shrink-0">
                  {item.rank}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-brand-yellow-butter rounded-full border border-brand-dark">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-obviously text-base sm:text-lg font-black uppercase text-brand-dark">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-6 self-end sm:self-center">
                <div className="text-right">
                  <div className="text-base sm:text-lg font-black text-brand-orange font-obviously">{item.views}</div>
                  <div className="text-[11px] text-gray-500 font-bold">{item.shares} shares • {item.saves} saves</div>
                </div>
                <button
                  onClick={() => onOpenCreateWithTopic(`Followup breakdown on ${item.title}`)}
                  className="px-4 py-2 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center gap-1"
                >
                  <span>Replicate</span>
                  <ArrowRight className="w-3 h-3 text-yellow-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. WHAT IS WORKING & WHAT IS NOT WORKING (PLAIN ENGLISH INTELLIGENCE)
      ────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* WHAT IS WORKING */}
        <div className="bg-[#CFFAFE] p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-800" />
              <h3 className="font-obviously text-2xl uppercase font-black text-brand-dark">
                WHAT IS WORKING
              </h3>
            </div>
            <p className="text-xs font-semibold text-cyan-950 mb-6">
              Insights that actually drive views, not useless chart noise:
            </p>

            <ul className="space-y-3.5">
              {WHAT_IS_WORKING.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-brand-dark/20 text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                  <span className="text-emerald-600 font-black flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-dark/20 text-[11px] font-bold text-cyan-900">
            ✦ Intelligence applied automatically to upcoming generation cues.
          </div>
        </div>

        {/* WHAT IS NOT WORKING */}
        <div className="bg-[#FCE7F3] p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-pink-700" />
              <h3 className="font-obviously text-2xl uppercase font-black text-brand-dark">
                WHAT ISN'T WORKING
              </h3>
            </div>
            <p className="text-xs font-semibold text-pink-950 mb-6">
              Patterns we actively eliminate before scripts hit your review:
            </p>

            <ul className="space-y-3.5">
              {WHAT_IS_NOT_WORKING.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-brand-dark/20 text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                  <span className="text-red-500 font-black flex-shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-dark/20 text-[11px] font-bold text-pink-900">
            ✦ Filters active. No low-retention intros will be created.
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. RECOMMENDED NEXT MOVES (WITH DIRECT CONNECT INTO CREATE)
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-[#FFF8D6] p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-brand-orange fill-brand-orange" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-obviously tracking-tight leading-none">
                VIRALYST RECOMMENDS
              </h2>
              <p className="text-xs font-bold text-gray-700 mt-0.5">
                Immediate next steps grounded in your live performance data:
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RECOMMENDED_NEXT_MOVES.map((move) => (
            <div
              key={move.id}
              className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="font-obviously text-base font-black uppercase leading-tight mb-2 text-brand-dark">
                  {move.title}
                </h4>
                <p className="text-xs text-gray-600 font-semibold mb-4 leading-relaxed">
                  Reason: {move.reason}
                </p>
              </div>

              <button
                onClick={() => onOpenCreateWithTopic(move.promptSeed)}
                className="w-full py-2.5 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center justify-center gap-2"
              >
                <span>Create content from this</span>
                <ArrowRight className="w-3.5 h-3.5 text-yellow-300" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
