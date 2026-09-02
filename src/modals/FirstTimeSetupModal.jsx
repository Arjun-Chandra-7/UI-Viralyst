import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Upload, Building2, Target, Sliders, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FirstTimeSetupModal({ onCompleteSetup, onSkip }) {
  const [step, setStep] = useState(1);

  // Step 1 - Your Business
  const [companyName, setCompanyName] = useState('Acme Technologies');
  const [website, setWebsite] = useState('https://acme.tech');
  const [instagram, setInstagram] = useState('@acmetech');

  // Step 2 - What do you want?
  const [selectedGoals, setSelectedGoals] = useState(['Grow audience', 'Build authority']);

  // Step 3 - Content Preferences
  const [topicsToFocus, setTopicsToFocus] = useState('B2B SaaS productivity, async workflows, developer tools');
  const [topicsToAvoid, setTopicsToAvoid] = useState('Get rich quick tropes, clickbait AI hype, politics');
  const [uploadedBrandMaterial, setUploadedBrandMaterial] = useState(false);

  // Step 4 - Preparation State
  const [prepProgress, setPrepProgress] = useState(0);

  const toggleGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleNext = () => {
    if (step === 3) {
      setStep(4);
      startPreparation();
    } else {
      setStep(step + 1);
    }
  };

  const startPreparation = () => {
    let p = 0;
    const interval = setInterval(() => {
      p += 25;
      setPrepProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 }
          });
          onCompleteSetup({
            companyName,
            website,
            instagram,
            goals: selectedGoals,
            topicsToFocus,
            topicsToAvoid
          });
        }, 800);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-xl bg-white rounded-5xl border-3 border-brand-dark shadow-pop p-6 sm:p-8 overflow-hidden">
        
        {/* Step Indicator Header */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b-2 border-brand-dark/10">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full border-2 border-brand-dark flex items-center justify-center font-obviously text-xs font-black transition-all ${
                  step === s ? 'bg-brand-yellow-butter text-brand-dark shadow-pop-sm scale-105' :
                  step > s ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400'
                }`}
              >
                {step > s ? '✓' : s}
              </div>
            ))}
          </div>

          {step < 4 && (
            <button
              onClick={onSkip}
              className="text-xs font-bold text-gray-500 uppercase hover:text-black"
            >
              Skip to Demo
            </button>
          )}
        </div>

        {/* ── STEP 1: YOUR BUSINESS ── */}
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 bg-[#FFF8D6] rounded-full border border-brand-dark mb-2 inline-block">
                Step 1 of 3
              </span>
              <h3 className="font-obviously text-2xl sm:text-3xl font-black uppercase tracking-tight">
                TELL US ABOUT YOUR BUSINESS
              </h3>
              <p className="text-xs text-gray-600 font-semibold mt-1">
                VIRALYST uses this to calibrate tone and audience demographics.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase text-gray-700 mb-1">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-brand-dark font-bold text-sm bg-[#FFFDF7]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-gray-700 mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-brand-dark font-bold text-sm bg-[#FFFDF7]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-gray-700 mb-1">
                  Instagram Account Handle
                </label>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-brand-dark font-bold text-sm bg-[#FFFDF7]"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 bg-brand-dark text-white rounded-full font-black text-sm uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center justify-center gap-2 mt-4"
            >
              <span>Continue to Goals</span>
              <ArrowRight className="w-4 h-4 text-brand-yellow-gold" />
            </button>
          </div>
        )}

        {/* ── STEP 2: WHAT DO YOU WANT? ── */}
        {step === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 bg-[#CFFAFE] rounded-full border border-brand-dark mb-2 inline-block text-cyan-900">
                Step 2 of 3
              </span>
              <h3 className="font-obviously text-2xl sm:text-3xl font-black uppercase tracking-tight">
                WHAT DO YOU WANT?
              </h3>
              <p className="text-xs text-gray-600 font-semibold mt-1">
                Select your primary growth objectives:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'Grow audience', label: 'Grow audience', desc: 'Broad reach & viral discovery' },
                { id: 'Build authority', label: 'Build authority', desc: 'Niche trust & saved insights' },
                { id: 'Generate leads', label: 'Generate leads', desc: 'Direct message inquiry hooks' },
                { id: 'Sell product', label: 'Sell product', desc: 'Demo signups & customer acquisition' },
                { id: 'Other', label: 'Other', desc: 'Custom enterprise expansion' }
              ].map((item) => {
                const isSelected = selectedGoals.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleGoal(item.id)}
                    className={`p-4 rounded-3xl border-2 border-brand-dark cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#FAED8F] shadow-pop-sm -translate-y-0.5'
                        : 'bg-[#FFFDF7] hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-obviously text-sm font-black uppercase">{item.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-brand-dark" />}
                    </div>
                    <p className="text-[11px] text-gray-600 font-semibold">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-3 rounded-full border-2 border-brand-dark text-xs font-bold uppercase"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-4 bg-brand-dark text-white rounded-full font-black text-sm uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center justify-center gap-2"
              >
                <span>Continue to Preferences</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow-gold" />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: CONTENT PREFERENCES ── */}
        {step === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 bg-[#FCE7F3] rounded-full border border-brand-dark mb-2 inline-block text-pink-900">
                Step 3 of 3
              </span>
              <h3 className="font-obviously text-2xl sm:text-3xl font-black uppercase tracking-tight">
                CONTENT PREFERENCES
              </h3>
              <p className="text-xs text-gray-600 font-semibold mt-1">
                Guardrails for the AI synthesis engine:
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-black uppercase text-gray-700 mb-1">
                  What should we talk about?
                </label>
                <input
                  type="text"
                  value={topicsToFocus}
                  onChange={(e) => setTopicsToFocus(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-brand-dark font-bold text-sm bg-[#FFFDF7]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-gray-700 mb-1">
                  What should we avoid?
                </label>
                <input
                  type="text"
                  value={topicsToAvoid}
                  onChange={(e) => setTopicsToAvoid(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-brand-dark font-bold text-sm bg-[#FFFDF7]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-gray-700 mb-1">
                  Upload Brand Material (optional)
                </label>
                <div
                  onClick={() => setUploadedBrandMaterial(!uploadedBrandMaterial)}
                  className="p-4 rounded-2xl border-2 border-dashed border-brand-dark bg-[#FFFDF0] flex items-center justify-between cursor-pointer hover:bg-yellow-100"
                >
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                    <Upload className="w-5 h-5 text-brand-amber" />
                    <span>{uploadedBrandMaterial ? '✓ brand-identity.pdf (Attached)' : 'Click to attach guidelines or brand voice doc'}</span>
                  </div>
                  <span className="text-xs font-black uppercase px-2 py-0.5 rounded-full bg-white border border-brand-dark">
                    {uploadedBrandMaterial ? 'Remove' : 'Select'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-3 rounded-full border-2 border-brand-dark text-xs font-bold uppercase"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-4 bg-brand-dark text-white rounded-full font-black text-sm uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center justify-center gap-2"
              >
                <span>Launch Workspace</span>
                <Sparkles className="w-4 h-4 text-brand-yellow-gold" />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 4: PREPARING YOUR WORKSPACE ── */}
        {step === 4 && (
          <div className="py-8 text-center space-y-6 animate-in zoom-in duration-300">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-[#FAED8F] border-3 border-brand-dark shadow-pop flex items-center justify-center font-obviously text-2xl animate-bounce">
              ⚡
            </div>

            <div>
              <h3 className="font-obviously text-3xl font-black uppercase tracking-tight mb-2">
                VIRALYST IS PREPARING YOUR WORKSPACE
              </h3>
              <p className="font-handwritten text-xl text-brand-orange font-bold">
                Calibrating hooks, research signals, and AI Manager intelligence...
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full border-2 border-brand-dark overflow-hidden max-w-md mx-auto">
              <div
                className="h-full bg-brand-amber rounded-full transition-all duration-500"
                style={{ width: `${prepProgress}%` }}
              />
            </div>

            <div className="text-xs font-mono text-gray-500">
              {prepProgress < 30 ? 'Analyzing niche competitor reels...' :
               prepProgress < 60 ? 'Configuring viral scoring discriminators...' :
               prepProgress < 90 ? 'Priming AI Manager conversational model...' :
               'Opening your command center!'}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
