import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2, Bookmark, Sparkles } from 'lucide-react';

export default function KineticReelPlayer({ 
  reel, 
  autoPlay = false, 
  showControls = true,
  interactive = true,
  compact = false 
}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [likes, setLikes] = useState(
    reel.stats?.views ? Math.floor(parseInt(reel.stats.views) * 0.12) || 4820 : 3410
  );
  const [hasLiked, setHasLiked] = useState(false);
  const [scrubPercent, setScrubPercent] = useState(compact ? 45 : 30);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setScrubPercent(prev => (prev >= 98 ? 5 : prev + 3));
    }, 450);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleLike = (e) => {
    e.stopPropagation();
    if (hasLiked) {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  // Select gradient theme
  const getThemeBackground = () => {
    switch (reel.videoTheme) {
      case 'amber':
        return 'from-[#FF8A00] via-[#E52E71] to-[#0D0C11]';
      case 'yellow':
        return 'from-[#FACC15] via-[#F59E0B] to-[#1E1B18]';
      case 'pink':
        return 'from-[#EC4899] via-[#8B5CF6] to-[#0F0E17]';
      case 'cyan':
        return 'from-[#06B6D4] via-[#3B82F6] to-[#0A0E1A]';
      default:
        return 'from-[#FF6B00] via-[#8B5CF6] to-[#0D0C11]';
    }
  };

  return (
    <div 
      className={`relative w-full h-full bg-gradient-to-b ${getThemeBackground()} text-white flex flex-col justify-between overflow-hidden select-none`}
      onClick={() => interactive && setIsPlaying(!isPlaying)}
    >
      {/* Subtle Noise / Texture overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Top Header Information */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>VIRALYST 9:16</span>
        </div>

        <div className="flex items-center gap-1">
          {showControls && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying)}
                }
                className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white" />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Center Kinetic Typography & Visual Hook */}
      <div className="relative z-10 px-4 sm:px-5 my-auto text-center">
        <div className="inline-block bg-[#FAED8F] text-[#0D0C11] px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider mb-2 border border-[#0D0C11] shadow-editorial-sm">
          ⚡ 3s Algorithmic Hook
        </div>

        <h3 className="font-obviously text-lg sm:text-2xl font-black uppercase tracking-tight leading-tight mb-2 drop-shadow-md">
          {reel.title}
        </h3>

        <div className="bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-[11px] sm:text-xs font-semibold leading-relaxed text-yellow-100 max-w-[240px] mx-auto shadow-sm">
          "{reel.hook}"
        </div>

        {/* Dynamic Audio Visualizer Equalizer */}
        <div className="flex items-center justify-center gap-1 mt-3">
          {[20, 32, 16, 28, 18, 36, 14, 24].map((h, i) => (
            <span
              key={i}
              className="w-1 bg-yellow-300 rounded-full transition-all duration-200"
              style={{
                height: isPlaying ? `${h}px` : '4px',
                opacity: isPlaying ? 1 : 0.4
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Engagement Sidebar (If interactive and not compact) */}
      {!compact && (
        <div className="absolute right-3 bottom-20 z-20 flex flex-col items-center gap-3">
          <button 
            type="button" 
            onClick={handleLike} 
            className="flex flex-col items-center gap-0.5 group"
          >
            <div className={`w-8 h-8 rounded-full ${hasLiked ? 'bg-pink-600' : 'bg-black/40'} backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110`}>
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white text-white' : 'text-white'}`} />
            </div>
            <span className="text-[9px] font-bold font-mono">{(likes / 1000).toFixed(1)}k</span>
          </button>

          <div className="flex flex-col items-center gap-0.5">
            <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Share2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[9px] font-bold font-mono">1.2k</span>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Bookmark className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[9px] font-bold font-mono">2.4k</span>
          </div>
        </div>
      )}

      {/* Bottom Scrubber & Metadata Bar */}
      <div className="relative z-10 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between text-[10px] font-mono text-white/90 mb-1.5">
          <span className="font-bold">@startupfounder</span>
          <span>{reel.duration}</span>
        </div>

        {/* Progress Scrubber */}
        <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FAED8F] rounded-full transition-all duration-300"
            style={{ width: `${scrubPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
