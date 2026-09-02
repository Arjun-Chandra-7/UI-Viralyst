import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  SlidersHorizontal, 
  ChevronDown, 
  ChevronUp, 
  Paperclip, 
  CheckCircle2, 
  Zap, 
  Flame, 
  Clock, 
  TrendingUp, 
  Eye, 
  Volume2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SUGGESTIONS } from '../data/mockData';

export default function CreateView({ onReelCreated, initialTopic = '', onReviewContent }) {
  const [promptText, setPromptText] = useState(
    initialTopic || 'Create a reel explaining why most productivity apps actually make teams slower.'
  );
  const [showTuningDeck, setShowTuningDeck] = useState(false);

  // Optional Controls
  const [goal, setGoal] = useState('Build Authority & Trust');
  const [contentStyle, setContentStyle] = useState('Educational Breakdown');
  const [duration, setDuration] = useState('22–25 seconds');
  const [targetAudience, setTargetAudience] = useState('Startup Founders & Engineers');
  const [cta, setCta] = useState('Save this reel for your next sprint');
  const [hasAttachment, setHasAttachment] = useState(false);

  // Dynamic Synthesis State Machine
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesisStageIndex, setSynthesisStageIndex] = useState(0);
  const [createdReel, setCreatedReel] = useState(null);

  const stages = [
    { title: 'Understanding the angle', detail: 'Deconstructing niche discourse and friction points...' },
    { title: 'Finding what matters', detail: 'Isolating the single contrarian truth that stops the scroll...' },
    { title: 'Building the story', detail: 'Pacing kinetic captions and visual cadence...' },
    { title: 'Refining the opening', detail: 'Tuning the 3-second hook for 84%+ algorithmic hold...' },
    { title: 'Preparing your reel', detail: 'Locking master audio synchronization and captions...' }
  ];

  const handleStartSynthesis = (presetTopic) => {
    const finalPrompt = presetTopic || promptText;
    if (!finalPrompt.trim()) return;

    setIsSynthesizing(true);
    setCreatedReel(null);
    setSynthesisStageIndex(0);

    // Progression through the 5 authored stages
    const timer1 = setTimeout(() => setSynthesisStageIndex(1), 800);
    const timer2 = setTimeout(() => setSynthesisStageIndex(2), 1700);
    const timer3 = setTimeout(() => setSynthesisStageIndex(3), 2600);
    const timer4 = setTimeout(() => setSynthesisStageIndex(4), 3500);

    const timerComplete = setTimeout(() => {
      const newReel = {
        id: `reel-${Date.now()}`,
        title: finalPrompt.length > 55 ? finalPrompt.substring(0, 52) + '...' : finalPrompt,
        description: `Custom ${contentStyle} cut for ${targetAudience}. Engineered for 84%+ completion.`,
        status: 'Ready for Review',
        date: 'Synthesized just now',
        scheduledFor: 'Tomorrow at 11:30 AM',
        objective: goal,
        hook: `Stop doing it the old way. Here is why ${finalPrompt.slice(0, 32)}...`,
        caption: `${finalPrompt}\n\nAutomated by VIRALYST. Save this before your next sprint.`,
        aspectRatio: '9:16',
        duration: duration.split(' ')[0] || '24s',
        videoTheme: 'amber',
        stats: { views: 'Ready For Verdict', shares: '0', saves: '0' },
        versions: [
          {
            version: 'V1',
            label: 'Initial Cut',
            hook: `Stop doing it the old way. Here is why ${finalPrompt.slice(0, 32)}...`,
            duration: duration.split(' ')[0] || '24s',
            notes: 'Generated from custom prompt'
          },
          {
            version: 'Final',
            label: 'Master Cut',
            hook: `Stop doing it the old way. Here is why ${finalPrompt.slice(0, 32)}...`,
            duration: duration.split(' ')[0] || '24s',
            notes: 'Polished for 84% completion'
          }
        ]
      };

      setCreatedReel(newReel);
      setIsSynthesizing(false);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.55 }
      });

      onReelCreated(newReel);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timerComplete);
    };
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-24">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL HEADER (NOT A BORING FORM)
      ────────────────────────────────────────────────────────────── */}
      <section className="border-b-2 border-[#0D0C11] pb-6">
        <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875] mb-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>SYNTHESIS STUDIO • DIRECT CREATIVE REQUISITION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase font-obviously tracking-tight leading-none text-[#0D0C11]">
          WHAT DO YOU WANT TO MAKE?
        </h1>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE PRIMARY CREATION CHANGER
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-white p-7 sm:p-10 rounded-5xl border-3 border-[#0D0C11] shadow-editorial-lg space-y-6">
        
        {/* Large Expressive Input */}
        <div>
          <label className="block text-xs font-mono font-black uppercase tracking-wider text-[#6B6875] mb-3">
            ENTER SEED CONCEPT OR CORE CONTRARIAN TRUTH:
          </label>
          <textarea
            rows={3}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            disabled={isSynthesizing}
            placeholder="e.g. Create a reel explaining why most productivity apps actually make teams slower..."
            className="w-full p-5 sm:p-6 rounded-4xl border-2 border-[#0D0C11] text-lg sm:text-2xl font-bold placeholder:text-[#6B6875] focus:outline-none focus:ring-2 focus:ring-[#FF9E00] bg-[#FAF7F2] text-[#0D0C11]"
          />
        </div>

        {/* Collapsible Analog Tuning Deck */}
        <div>
          <button
            type="button"
            onClick={() => setShowTuningDeck(!showTuningDeck)}
            className="flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-[#0D0C11] hover:text-[#FF5500] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{showTuningDeck ? 'Hide Tuning Parameters' : 'Fine-Tune Harmonic Parameters (Duration, Style, Goal, CTA)'}</span>
            {showTuningDeck ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showTuningDeck && (
            <div className="mt-4 p-6 rounded-4xl bg-[#FAF7F2] border-2 border-[#0D0C11] grid grid-cols-1 sm:grid-cols-2 gap-5 animate-in fade-in duration-200">
              
              {/* Duration Dial */}
              <div>
                <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1.5">
                  DURATION PACING
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-3 rounded-2xl border-2 border-[#0D0C11] bg-white font-bold text-xs"
                >
                  <option>18–22 seconds (Highest 100% Completion)</option>
                  <option>22–25 seconds (Algorithmic Sweet Spot)</option>
                  <option>28–35 seconds (Deep Tactical Breakdown)</option>
                </select>
              </div>

              {/* Style Dial */}
              <div>
                <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1.5">
                  FORMAT STRUCTURE
                </label>
                <select
                  value={contentStyle}
                  onChange={(e) => setContentStyle(e.target.value)}
                  className="w-full p-3 rounded-2xl border-2 border-[#0D0C11] bg-white font-bold text-xs"
                >
                  <option>Educational Breakdown</option>
                  <option>Contrarian Truth / Myth Buster</option>
                  <option>Tactical Listicle Checklist</option>
                  <option>Founder POV / Behind The Scenes</option>
                </select>
              </div>

              {/* Target Audience */}
              <div>
                <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1.5">
                  TARGET AUDIENCE
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full p-3 rounded-2xl border-2 border-[#0D0C11] bg-white font-bold text-xs"
                />
              </div>

              {/* Goal */}
              <div>
                <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1.5">
                  PRIMARY OBJECTIVE
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full p-3 rounded-2xl border-2 border-[#0D0C11] bg-white font-bold text-xs"
                >
                  <option>Build Authority & Trust</option>
                  <option>Grow Broad Audience</option>
                  <option>Generate High-Intent Leads</option>
                  <option>Sell Product / Demo Signups</option>
                </select>
              </div>

              {/* CTA */}
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1.5">
                  CALL TO ACTION (END SCREEN)
                </label>
                <input
                  type="text"
                  value={cta}
                  onChange={(e) => setCta(e.target.value)}
                  className="w-full p-3 rounded-2xl border-2 border-[#0D0C11] bg-white font-bold text-xs"
                />
              </div>

              {/* File Attachment */}
              <div className="sm:col-span-2 flex items-center justify-between p-3.5 rounded-2xl bg-white border-2 border-dashed border-[#0D0C11]/30">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6B6875]">
                  <Paperclip className="w-4 h-4" />
                  <span>{hasAttachment ? 'notes-research.pdf attached' : 'Attach notes, tweets, or brand memo (optional)'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setHasAttachment(!hasAttachment)}
                  className="px-3.5 py-1 rounded-full bg-[#FAF7F2] text-xs font-bold border border-[#0D0C11] hover:bg-[#FAED8F]"
                >
                  {hasAttachment ? 'Remove' : 'Attach File'}
                </button>
              </div>

            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. CREATION TRIGGER OR AUTHORED SYNTHESIS CHAMBER
        ────────────────────────────────────────────────────────────── */}
        {!isSynthesizing && !createdReel && (
          <button
            type="button"
            onClick={() => handleStartSynthesis()}
            disabled={!promptText.trim()}
            className="w-full py-5 bg-[#0D0C11] text-white rounded-full font-black text-lg uppercase tracking-wider btn-editorial flex items-center justify-center gap-3 disabled:opacity-40"
          >
            <span>Begin Autonomous Reel Synthesis</span>
            <Sparkles className="w-5 h-5 text-[#FAED8F]" />
          </button>
        )}

        {/* The 5-Stage Human-Readable Synthesis Chamber (No Fake Spinners!) */}
        {isSynthesizing && (
          <div className="p-8 rounded-4xl bg-[#FFF8D6] border-3 border-[#0D0C11] shadow-editorial space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-[#0D0C11] text-[#FAED8F] flex items-center justify-center font-obviously text-sm animate-spin-slow">
                  V
                </div>
                <div>
                  <div className="text-[10px] font-mono font-black uppercase text-[#6B6875]">
                    ACTIVE SYNTHESIS ENGINE
                  </div>
                  <h3 className="font-obviously text-xl font-black uppercase text-[#0D0C11]">
                    {stages[synthesisStageIndex].title}
                  </h3>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-[#FF5500]">
                STAGE 0{synthesisStageIndex + 1} / 05
              </span>
            </div>

            <p className="text-sm font-semibold text-[#0D0C11]">
              {stages[synthesisStageIndex].detail}
            </p>

            {/* Stepped Visual Indicators */}
            <div className="grid grid-cols-5 gap-2">
              {stages.map((stg, sIdx) => (
                <div
                  key={sIdx}
                  className={`h-2.5 rounded-full border border-[#0D0C11] transition-all duration-300 ${
                    sIdx <= synthesisStageIndex ? 'bg-[#0D0C11]' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Completion Celebration & Direct Review Trigger */}
        {createdReel && !isSynthesizing && (
          <div className="p-8 rounded-4xl bg-[#FAED8F] border-3 border-[#0D0C11] shadow-editorial space-y-5 animate-in zoom-in duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#10B981] text-white flex items-center justify-center border-2 border-[#0D0C11] font-bold text-lg">
                ✓
              </div>
              <div>
                <div className="text-[10px] font-mono font-black uppercase text-[#0D0C11]">
                  SYNTHESIS COMPLETE • READY FOR VERDICT
                </div>
                <h3 className="font-obviously text-2xl font-black uppercase text-[#0D0C11] leading-tight">
                  "{createdReel.title}"
                </h3>
              </div>
            </div>

            <p className="text-xs font-bold text-[#0D0C11] bg-white/80 p-3.5 rounded-2xl border border-[#0D0C11]">
              Hook: "{createdReel.hook}"
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setCreatedReel(null);
                  setPromptText('');
                }}
                className="px-6 py-3 bg-white text-[#0D0C11] rounded-full font-black text-xs uppercase border-2 border-[#0D0C11] btn-editorial-sm"
              >
                Synthesize Another
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. VIRALYST SUGGESTIONS (OPPORTUNITIES INFERRED FROM VELOCITY)
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#0D0C11] pb-4">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875]">
              INFERRED FROM PERFORMANCE DISCOURSE
            </div>
            <h2 className="font-obviously text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0D0C11]">
              HIGH-HEAT OPPORTUNITY SIGNALS
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-[#FF5500]">4 DETECTED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUGGESTIONS.map((sug) => (
            <div
              key={sug.id}
              className="p-7 rounded-5xl bg-white border-3 border-[#0D0C11] shadow-editorial flex flex-col justify-between hover:bg-[#FAF7F2] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono font-bold">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAED8F] text-[#0D0C11] border border-[#0D0C11] uppercase">
                    {sug.tag}
                  </span>
                  <span className="text-[#FF5500]">EST: {sug.projectedViews}</span>
                </div>

                <h3 className="font-obviously text-xl font-black uppercase leading-tight mb-2 text-[#0D0C11]">
                  {sug.title}
                </h3>

                <p className="text-xs text-[#6B6875] font-semibold mb-6 bg-[#FAF7F2] p-3 rounded-2xl border border-[#0D0C11]/10">
                  <span className="text-[#0D0C11] font-bold">Signal: </span>
                  {sug.reason}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0D0C11]/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#6B6875]">
                  Cadence: {sug.suggestedLength}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setPromptText(sug.title);
                    handleStartSynthesis(sug.title);
                  }}
                  className="py-2 px-5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase btn-editorial-sm flex items-center gap-1.5"
                >
                  <span>Synthesize</span>
                  <ArrowRight className="w-3 h-3 text-[#FAED8F]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
