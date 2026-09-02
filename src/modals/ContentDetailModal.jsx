import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Edit3, 
  MessageSquare, 
  History, 
  Calendar, 
  Sparkles, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';
import KineticReelPlayer from '../components/KineticReelPlayer';

export default function ContentDetailModal({ 
  reel, 
  onClose, 
  onApprove, 
  onRequestChanges, 
  onAskManager 
}) {
  const [showVersions, setShowVersions] = useState(false);
  const [activeVersion, setActiveVersion] = useState(
    reel.versions?.[reel.versions.length - 1]?.version || 'Final'
  );

  if (!reel) return null;

  const currentVersionData = reel.versions?.find(v => v.version === activeVersion) || reel.versions?.[0] || {
    hook: reel.hook,
    duration: reel.duration,
    notes: 'Master approved cut'
  };

  const handleApprove = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 }
    });
    onApprove(reel.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0C11]/75 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#FAF7F2] rounded-6xl border-3 border-[#0D0C11] shadow-editorial-lg overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        
        {/* Top Masthead */}
        <div className="p-6 bg-white border-b-2 border-[#0D0C11] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-[9px] font-mono font-black uppercase px-3 py-1 rounded-full border border-[#0D0C11] ${
              reel.status === 'Ready for Review' ? 'bg-[#FF5500] text-white' :
              reel.status === 'Scheduled' ? 'bg-[#FAED8F] text-[#0D0C11]' :
              reel.status === 'Published' ? 'bg-[#10B981] text-white' :
              'bg-[#EFECE6] text-[#6B6875]'
            }`}>
              {reel.status}
            </span>
            <span className="text-xs font-mono font-bold text-[#6B6875]">
              OBJECTIVE: {reel.objective}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white text-[#0D0C11] border-2 border-[#0D0C11] flex items-center justify-center btn-editorial-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Left Cinema Reel & Right Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10">
          
          {/* Left Column: Full-Height Cinema Reel Slab */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-[280px] sm:w-[310px] h-[520px] rounded-[36px] border-3 border-[#0D0C11] shadow-editorial overflow-hidden">
              <KineticReelPlayer
                reel={{
                  ...reel,
                  hook: currentVersionData.hook,
                  duration: currentVersionData.duration || reel.duration
                }}
                autoPlay={true}
                compact={false}
              />
            </div>
          </div>

          {/* Right Column: Title, Copy, Schedule & Verdict Actions */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-[#6B6875] tracking-wider mb-1">
                  SLOT: {reel.scheduledFor}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase font-obviously tracking-tight leading-tight text-[#0D0C11]">
                  {reel.title}
                </h2>
              </div>

              {/* Caption Deck */}
              <div>
                <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] tracking-wider mb-1.5">
                  POST CAPTION & HASHTAGS
                </label>
                <div className="p-4 rounded-3xl bg-white border-2 border-[#0D0C11] text-xs sm:text-sm font-semibold text-[#0D0C11] whitespace-pre-line leading-relaxed shadow-editorial-sm">
                  {reel.caption}
                </div>
              </div>

              {/* Metrics / Hold Prediction */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white rounded-2xl border border-[#0D0C11]">
                  <span className="text-[10px] font-mono font-bold text-[#6B6875] uppercase block">Pacing Cadence</span>
                  <span className="text-sm font-black font-obviously">{currentVersionData.duration || reel.duration}</span>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-[#0D0C11]">
                  <span className="text-[10px] font-mono font-bold text-[#6B6875] uppercase block">Predicted Completion</span>
                  <span className="text-sm font-black font-obviously text-[#10B981]">84%+ High Save</span>
                </div>
              </div>

              {/* Version History Toggle */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowVersions(!showVersions)}
                  className="flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-[#0D0C11] hover:text-[#FF5500] transition-colors"
                >
                  <History className="w-4 h-4" />
                  <span>{showVersions ? 'Hide Version Cuts' : 'Inspect Version History (V1, V2, Final)'}</span>
                </button>

                {showVersions && (
                  <div className="mt-3 p-4 rounded-3xl bg-white border-2 border-[#0D0C11] space-y-2">
                    <div className="text-[10px] font-mono font-bold uppercase text-[#6B6875] mb-1">
                      Available Synthesized Cuts:
                    </div>
                    {reel.versions?.map((ver) => (
                      <div
                        key={ver.version}
                        onClick={() => setActiveVersion(ver.version)}
                        className={`p-3 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                          activeVersion === ver.version
                            ? 'bg-[#0D0C11] text-white border-[#0D0C11] shadow-editorial-sm'
                            : 'bg-[#FAF7F2] text-[#0D0C11] border-[#0D0C11]/20 hover:bg-[#FAED8F]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-obviously font-black text-xs uppercase">{ver.version}</span>
                            <span className="text-[10px] font-mono opacity-80">({ver.label})</span>
                          </div>
                          <p className="text-[11px] font-semibold mt-0.5 line-clamp-1">
                            "{ver.hook}"
                          </p>
                        </div>
                        <span className="text-xs font-mono font-bold">{ver.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Verdict Action Row */}
            <div className="pt-6 border-t-2 border-[#0D0C11]/10 flex flex-wrap items-center gap-3">
              {reel.status === 'Ready for Review' && (
                <button
                  type="button"
                  onClick={handleApprove}
                  className="flex-1 py-4 bg-[#10B981] text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve & Lock Broadcast</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestChanges(reel);
                }}
                className="px-5 py-4 bg-white text-[#0D0C11] rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial-sm flex items-center gap-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Request Changes</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onAskManager(`Regarding the reel "${reel.title}": `);
                }}
                className="px-5 py-4 bg-[#FAED8F] text-[#0D0C11] rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consult Manager</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
