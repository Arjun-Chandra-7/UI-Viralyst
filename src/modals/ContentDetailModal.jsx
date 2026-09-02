import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Edit3, 
  MessageSquare, 
  History, 
  Calendar, 
  Sparkles, 
  Clock, 
  ChevronRight,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContentDetailModal({ 
  reel, 
  onClose, 
  onApprove, 
  onRequestChanges, 
  onAskManager 
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showVersions, setShowVersions] = useState(false);
  const [activeVersion, setActiveVersion] = useState(
    reel.versions?.[reel.versions.length - 1]?.version || 'Final'
  );

  if (!reel) return null;

  const currentVersionData = reel.versions?.find(v => v.version === activeVersion) || reel.versions?.[0] || {
    hook: reel.hook,
    duration: reel.duration,
    notes: 'Current master cut'
  };

  const handleApprove = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 }
    });
    onApprove(reel.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-5xl border-3 border-brand-dark shadow-pop overflow-hidden my-6">
        
        {/* Modal Top Header */}
        <div className="p-6 bg-[#FFF8D6] border-b-2 border-brand-dark flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full border border-brand-dark ${
              reel.status === 'Ready for Review' ? 'bg-[#FCE7F3] text-pink-700' :
              reel.status === 'Scheduled' ? 'bg-[#CFFAFE] text-cyan-800' :
              reel.status === 'Published' ? 'bg-emerald-100 text-emerald-800' :
              'bg-amber-100 text-amber-800'
            }`}>
              {reel.status}
            </span>
            <span className="text-xs font-bold text-gray-700">
              Objective: {reel.objective}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white text-brand-dark border-2 border-brand-dark flex items-center justify-center btn-pop-sm hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Split into Left Playable Reel and Right Metadata / Actions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Big Playable Reel Preview */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[310px] h-[540px] bg-brand-dark rounded-[40px] p-3 border-3 border-brand-dark shadow-pop flex flex-col justify-between overflow-hidden">
              
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Video Screen Simulation */}
              <div className={`relative w-full h-full rounded-[30px] overflow-hidden p-4 flex flex-col justify-between text-white select-none ${
                reel.videoTheme === 'amber' ? 'bg-gradient-to-b from-amber-600 via-orange-600 to-stone-900' :
                reel.videoTheme === 'yellow' ? 'bg-gradient-to-b from-yellow-400 via-amber-500 to-zinc-900 text-brand-dark' :
                reel.videoTheme === 'pink' ? 'bg-gradient-to-b from-pink-500 via-rose-600 to-purple-950' :
                'bg-gradient-to-b from-cyan-500 via-blue-600 to-slate-950'
              }`}>
                
                {/* Top Controls */}
                <div className="relative z-20 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-black bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {activeVersion} • {currentVersionData.duration || reel.duration}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Center Content Hook Preview */}
                <div className="relative z-10 text-center px-2 my-auto">
                  <div className="inline-block bg-[#FAED8F] text-brand-dark px-3 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider mb-3 border border-brand-dark">
                    ⚡ {activeVersion} Hook
                  </div>
                  <h3 className="font-obviously text-xl sm:text-2xl font-black uppercase tracking-tight leading-snug drop-shadow mb-3">
                    {reel.title}
                  </h3>
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20 text-xs font-semibold text-yellow-200">
                    "{currentVersionData.hook}"
                  </div>

                  {/* Audio Bars */}
                  <div className="flex items-center justify-center gap-1 mt-4">
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '20px' : '4px', animationDuration: '0.6s' }} />
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '28px' : '4px', animationDuration: '0.8s', animationDelay: '0.2s' }} />
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '14px' : '4px', animationDuration: '0.5s', animationDelay: '0.1s' }} />
                    <span className="w-1 bg-yellow-300 rounded-full animate-bounce" style={{ height: isPlaying ? '22px' : '4px', animationDuration: '0.7s', animationDelay: '0.3s' }} />
                  </div>
                </div>

                {/* Bottom Scrubber */}
                <div className="relative z-20">
                  <div className="w-full h-1 bg-white/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-300 rounded-full transition-all duration-300"
                      style={{ width: isPlaying ? '74%' : '25%' }}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Title, Caption, Post Text, Schedule & Action Buttons */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase font-obviously tracking-tight leading-tight text-brand-dark mb-1">
                  {reel.title}
                </h2>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Scheduled: {reel.scheduledFor}</span>
                </div>
              </div>

              {/* Caption Box */}
              <div>
                <label className="block text-xs font-black uppercase text-gray-700 tracking-wider mb-1">
                  Post Caption:
                </label>
                <div className="p-4 rounded-3xl bg-[#FFFDF7] border-2 border-brand-dark text-xs sm:text-sm font-semibold text-gray-800 whitespace-pre-line leading-relaxed">
                  {reel.caption}
                </div>
              </div>

              {/* Content Objective */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-brand-dark/20 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-gray-500 uppercase text-[10px] block">Content Objective:</span>
                  <span className="font-bold text-brand-dark">{reel.objective}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-gray-500 uppercase text-[10px] block">Target Hold Rate:</span>
                  <span className="font-bold text-emerald-600">82%+</span>
                </div>
              </div>

              {/* Version History Toggle (Hidden by default to avoid clutter) */}
              <div className="pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowVersions(!showVersions)}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-dark hover:text-brand-orange transition-colors"
                >
                  <History className="w-4 h-4" />
                  <span>{showVersions ? 'Hide Version History' : 'View Version History (V1, V2, Final)'}</span>
                </button>

                {showVersions && (
                  <div className="mt-3 p-4 rounded-3xl bg-[#FFF8D6] border-2 border-brand-dark space-y-2 animate-in fade-in duration-200">
                    <div className="text-[11px] font-black uppercase text-gray-700 mb-1">
                      Available Cuts:
                    </div>
                    {reel.versions?.map((ver) => (
                      <div
                        key={ver.version}
                        onClick={() => setActiveVersion(ver.version)}
                        className={`p-3 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                          activeVersion === ver.version
                            ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                            : 'bg-white text-brand-dark border-brand-dark/20 hover:bg-yellow-100'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-xs uppercase">{ver.version}</span>
                            <span className="text-[10px] opacity-80">({ver.label})</span>
                          </div>
                          <p className="text-[11px] mt-0.5 line-clamp-1 opacity-90 font-medium">
                            "{ver.hook}"
                          </p>
                        </div>
                        <span className="text-xs font-mono">{ver.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Actions: Approve, Request Changes, Ask Manager */}
            <div className="pt-4 border-t-2 border-brand-dark/10 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                {reel.status === 'Ready for Review' && (
                  <button
                    onClick={handleApprove}
                    className="flex-1 py-3.5 bg-emerald-500 text-white rounded-full font-black text-sm uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Approve & Schedule</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    onClose();
                    onRequestChanges(reel);
                  }}
                  className="px-5 py-3.5 bg-white text-brand-dark rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark btn-pop-sm flex items-center gap-2"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Request Changes</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onAskManager(`Regarding the reel "${reel.title}": `);
                  }}
                  className="px-5 py-3.5 bg-[#FCE7F3] text-pink-900 rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark btn-pop-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-pink-600" />
                  <span>Ask Manager</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
