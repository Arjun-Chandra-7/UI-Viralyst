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
  Clock, 
  TrendingUp, 
  FileText,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SUGGESTIONS } from '../data/mockData';

export default function CreateView({ onReelCreated, initialTopic = '' }) {
  const [promptText, setPromptText] = useState(
    initialTopic || 'Create a reel explaining why most productivity apps actually make teams slower.'
  );
  const [showOptionalControls, setShowOptionalControls] = useState(false);

  // Optional Controls
  const [goal, setGoal] = useState('Build Authority');
  const [topic, setTopic] = useState('SaaS & Productivity');
  const [audience, setAudience] = useState('Startup Founders & Knowledge Workers');
  const [contentStyle, setContentStyle] = useState('Educational Breakdown');
  const [desiredLength, setDesiredLength] = useState('20–25 seconds');
  const [cta, setCta] = useState('Save this reel for your next sprint');
  const [hasAttachment, setHasAttachment] = useState(false);

  // Creation state
  const [isCreating, setIsCreating] = useState(false);
  const [creationStep, setCreationStep] = useState(''); // e.g. "Researching niche angles...", "Synthesizing visual hook...", "Ready for Review"
  const [isComplete, setIsComplete] = useState(false);
  const [newlyCreatedReel, setNewlyCreatedReel] = useState(null);

  const handleStartCreation = (topicToUse) => {
    const finalPrompt = topicToUse || promptText;
    if (!finalPrompt.trim()) return;

    setIsCreating(true);
    setIsComplete(false);

    // Clean, non-technical steps for client
    setCreationStep('Reviewing proven hooks in your niche...');

    setTimeout(() => {
      setCreationStep('Synthesizing script & visual captions...');
    }, 1200);

    setTimeout(() => {
      setCreationStep('Scoring viral retention & polishing pacing...');
    }, 2400);

    setTimeout(() => {
      const newReel = {
        id: `reel-${Date.now()}`,
        title: finalPrompt.length > 50 ? finalPrompt.substring(0, 48) + '...' : finalPrompt,
        description: `Custom ${contentStyle} cut for ${audience}. Engineered for 80%+ retention.`,
        status: 'Ready for Review',
        date: 'Just now',
        scheduledFor: 'Tomorrow at 12:00 PM',
        objective: goal,
        hook: `Stop doing it the old way. Here is why ${finalPrompt.slice(0, 30)}...`,
        caption: `${finalPrompt}\n\nAutomated by VIRALYST. Double tap if you agree.`,
        aspectRatio: '9:16',
        duration: desiredLength.split(' ')[0] || '24s',
        videoTheme: 'amber',
        stats: { views: 'Pending Review', shares: '0', saves: '0' },
        versions: [
          {
            version: 'V1',
            label: 'Initial Cut',
            hook: `Stop doing it the old way. Here is why ${finalPrompt.slice(0, 30)}...`,
            duration: desiredLength.split(' ')[0] || '24s',
            notes: 'Generated from client prompt'
          },
          {
            version: 'Final',
            label: 'Master Cut',
            hook: `Stop doing it the old way. Here is why ${finalPrompt.slice(0, 30)}...`,
            duration: desiredLength.split(' ')[0] || '24s',
            notes: 'Polished for 84% completion'
          }
        ]
      };

      setNewlyCreatedReel(newReel);
      setIsCreating(false);
      setIsComplete(true);
      setCreationStep('Ready for Review');

      // Trigger celebratory confetti
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });

      onReelCreated(newReel);
    }, 3600);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-[#CFFAFE] p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-brand-dark text-xs font-bold uppercase tracking-wider mb-2 text-cyan-900">
          <Zap className="w-3.5 h-3.5 text-cyan-600" />
          Clean Content Creation
        </div>
        <h1 className="text-3xl sm:text-5xl font-black uppercase font-obviously tracking-tight leading-none mb-2">
          WHAT DO YOU WANT TO MAKE?
        </h1>
        <p className="font-handwritten text-xl sm:text-2xl text-cyan-800 font-bold">
          Type your idea, pick optional controls, or tap a proven recommendation below.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. THE CLEAN CREATION CONTAINER
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-white p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop space-y-6">
        
        {/* Large Prompt Box */}
        <div>
          <label className="block text-xs font-black uppercase text-gray-700 tracking-wider mb-2">
            Reel Topic or Concept Prompt:
          </label>
          <textarea
            rows={3}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            disabled={isCreating}
            placeholder="e.g. Create a reel explaining why most productivity apps actually make teams slower..."
            className="w-full p-4 sm:p-5 rounded-3xl border-2 border-brand-dark text-base sm:text-lg font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-amber bg-[#FFFDF7]"
          />
        </div>

        {/* Optional Controls Toggle */}
        <div>
          <button
            type="button"
            onClick={() => setShowOptionalControls(!showOptionalControls)}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-dark hover:text-brand-orange transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{showOptionalControls ? 'Hide Optional Parameters' : 'Fine-Tune Optional Controls (Goal, Style, CTA)'}</span>
            {showOptionalControls ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Expandable Parameters */}
          {showOptionalControls && (
            <div className="mt-4 p-5 rounded-4xl bg-[#FFFDF0] border-2 border-brand-dark grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
              
              {/* Goal */}
              <div>
                <label className="block text-[11px] font-black uppercase text-gray-600 mb-1">Primary Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full p-2.5 rounded-2xl border border-brand-dark bg-white font-bold text-xs"
                >
                  <option>Build Authority & Trust</option>
                  <option>Grow Broad Audience</option>
                  <option>Generate High-Intent Leads</option>
                  <option>Sell Product / Demo Signups</option>
                </select>
              </div>

              {/* Content Style */}
              <div>
                <label className="block text-[11px] font-black uppercase text-gray-600 mb-1">Content Style</label>
                <select
                  value={contentStyle}
                  onChange={(e) => setContentStyle(e.target.value)}
                  className="w-full p-2.5 rounded-2xl border border-brand-dark bg-white font-bold text-xs"
                >
                  <option>Educational Breakdown</option>
                  <option>Contrarian / Polarizing Take</option>
                  <option>Tactical Listicle Checklist</option>
                  <option>Behind The Scenes / Founder POV</option>
                </select>
              </div>

              {/* Audience */}
              <div>
                <label className="block text-[11px] font-black uppercase text-gray-600 mb-1">Target Audience</label>
                <input
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full p-2.5 rounded-2xl border border-brand-dark bg-white font-bold text-xs"
                />
              </div>

              {/* Desired Length */}
              <div>
                <label className="block text-[11px] font-black uppercase text-gray-600 mb-1">Desired Duration</label>
                <select
                  value={desiredLength}
                  onChange={(e) => setDesiredLength(e.target.value)}
                  className="w-full p-2.5 rounded-2xl border border-brand-dark bg-white font-bold text-xs"
                >
                  <option>18–22 seconds (Highest Completion)</option>
                  <option>22–26 seconds (Optimal virality)</option>
                  <option>28–35 seconds (Deep education)</option>
                </select>
              </div>

              {/* CTA */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-black uppercase text-gray-600 mb-1">Call to Action (CTA)</label>
                <input
                  type="text"
                  value={cta}
                  onChange={(e) => setCta(e.target.value)}
                  className="w-full p-2.5 rounded-2xl border border-brand-dark bg-white font-bold text-xs"
                />
              </div>

              {/* Reference / Files attachment */}
              <div className="sm:col-span-2 flex items-center justify-between p-3 rounded-2xl bg-white border border-dashed border-brand-dark/40">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                  <Paperclip className="w-4 h-4 text-gray-400" />
                  <span>{hasAttachment ? 'brand-deck-2026.pdf attached' : 'Attach notes, tweet, or brand doc (optional)'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setHasAttachment(!hasAttachment)}
                  className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-bold border border-brand-dark"
                >
                  {hasAttachment ? 'Remove' : 'Upload File'}
                </button>
              </div>

            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. CREATION ACTION OR ANIMATED CREATING STATE
        ────────────────────────────────────────────────────────────── */}
        {!isCreating && !isComplete && (
          <button
            onClick={() => handleStartCreation()}
            disabled={!promptText.trim()}
            className="w-full py-4 sm:py-5 bg-brand-dark text-white rounded-full font-black text-lg uppercase tracking-wider border-3 border-brand-dark btn-pop flex items-center justify-center gap-3 disabled:opacity-40"
          >
            <span>Create Reel</span>
            <Sparkles className="w-5 h-5 text-brand-yellow-gold fill-brand-yellow-gold" />
          </button>
        )}

        {/* Client-Facing Clean Progress State (No technical machinery!) */}
        {isCreating && (
          <div className="p-6 rounded-4xl bg-[#FFF8D6] border-2 border-brand-dark shadow-pop text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-dark text-yellow-300 flex items-center justify-center animate-spin-slow">
              <Sparkles className="w-6 h-6" />
            </div>

            <div>
              <div className="text-xl font-black uppercase font-obviously text-brand-dark">
                CREATING YOUR REEL
              </div>
              <p className="text-sm font-bold text-brand-orange mt-1">
                {creationStep}
              </p>
            </div>

            {/* Clean Progress Line */}
            <div className="w-full max-w-md mx-auto h-2 bg-black/10 rounded-full overflow-hidden">
              <div className="h-full bg-brand-orange rounded-full animate-pulse" style={{ width: '85%' }} />
            </div>
            <div className="text-[11px] text-gray-500 font-mono">
              VIRALYST is polishing hooks and formatting for maximum saves...
            </div>
          </div>
        )}

        {/* Ready For Review State */}
        {isComplete && newlyCreatedReel && (
          <div className="p-6 rounded-4xl bg-[#FCE7F3] border-3 border-brand-dark shadow-pop text-center space-y-4 animate-in zoom-in duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl border-2 border-brand-dark">
              ✓
            </div>

            <div>
              <div className="text-2xl font-black uppercase font-obviously text-brand-dark">
                READY FOR REVIEW!
              </div>
              <p className="text-sm font-bold text-gray-800 mt-1 max-w-md mx-auto">
                "{newlyCreatedReel.title}" has been created and placed in your Content Workspace.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setIsComplete(false);
                  setPromptText('');
                }}
                className="px-6 py-2.5 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm"
              >
                Create Another
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. VIRALYST SUGGESTIONS (RECOMMENDED FOR YOU)
      ────────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-amber fill-brand-amber" />
            <h2 className="text-xl sm:text-2xl font-black uppercase font-obviously tracking-tight">
              RECOMMENDED FOR YOU
            </h2>
          </div>
          <span className="text-xs font-bold text-gray-500">Auto-sourced from niche signals</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SUGGESTIONS.map((sug) => (
            <div
              key={sug.id}
              className={`p-6 rounded-4xl border-2 border-brand-dark shadow-pop flex flex-col justify-between ${
                sug.theme === 'amber' ? 'bg-[#FFF8D6]' :
                sug.theme === 'yellow' ? 'bg-[#FEF08A]' :
                sug.theme === 'pink' ? 'bg-[#FCE7F3]' :
                'bg-[#CFFAFE]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 bg-white rounded-full border border-brand-dark">
                    {sug.tag}
                  </span>
                  <span className="text-[11px] font-bold text-gray-600">
                    Est: {sug.projectedViews}
                  </span>
                </div>

                <h3 className="font-obviously text-xl font-black uppercase leading-snug mb-2">
                  {sug.title}
                </h3>

                <div className="text-xs font-semibold text-gray-700 mb-4 bg-white/70 p-3 rounded-2xl border border-brand-dark/20">
                  <span className="font-bold text-brand-dark">Reason: </span>
                  {sug.reason}
                </div>
              </div>

              <div className="pt-2 border-t border-brand-dark/20 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-600">
                  Suggested length: {sug.suggestedLength}
                </span>

                <button
                  onClick={() => {
                    setPromptText(sug.title);
                    handleStartCreation(sug.title);
                  }}
                  className="px-5 py-2 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center gap-1.5"
                >
                  <span>Create this</span>
                  <ArrowRight className="w-3.5 h-3.5 text-yellow-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
