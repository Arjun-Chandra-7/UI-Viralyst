import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Send, 
  Archive, 
  Edit3, 
  Eye, 
  Plus, 
  TrendingUp, 
  Radio, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import KineticReelPlayer from '../components/KineticReelPlayer';

export default function ContentView({ 
  contentList, 
  activeTab = 'All', 
  onSelectTab, 
  onReviewContent, 
  onApproveContent, 
  onRequestChanges, 
  onNavigate 
}) {
  const [selectedFilter, setSelectedFilter] = useState(activeTab || 'All');

  const tabs = [
    { id: 'All', label: 'ALL REELS', count: contentList.length },
    { id: 'Ready for Review', label: 'REQUIRES VERDICT', count: contentList.filter(c => c.status === 'Ready for Review').length, alert: true },
    { id: 'In Progress', label: 'IN PROGRESS', count: contentList.filter(c => c.status === 'In Progress').length },
    { id: 'Scheduled', label: 'QUEUED', count: contentList.filter(c => c.status === 'Scheduled').length },
    { id: 'Published', label: 'IN LIVE ORBIT', count: contentList.filter(c => c.status === 'Published').length },
    { id: 'Archived', label: 'ARCHIVED', count: contentList.filter(c => c.status === 'Archived').length }
  ];

  const filteredContent = selectedFilter === 'All' 
    ? contentList 
    : contentList.filter(c => c.status === selectedFilter);

  return (
    <div className="space-y-10 pb-24 max-w-7xl mx-auto">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL HEADER & NEW CONTENT INVOCATION
      ────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b-2 border-[#0D0C11] pb-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>MEDIA-FIRST SHORT-FORM REEL UNIVERSE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase font-obviously tracking-tight leading-none text-[#0D0C11]">
            CONTENT UNIVERSE
          </h1>
        </div>

        <button
          onClick={() => onNavigate('create')}
          className="py-3 px-6 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase tracking-wider btn-editorial flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 text-[#FAED8F]" />
          <span>New Reel</span>
        </button>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. EDITORIAL STATE SWITCHER TABS
      ────────────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = selectedFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedFilter(tab.id);
                if (onSelectTab) onSelectTab(tab.id);
              }}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-black uppercase tracking-wider border-2 border-[#0D0C11] whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-[#0D0C11] text-white shadow-editorial-sm -translate-y-0.5'
                  : 'bg-white text-[#0D0C11] hover:bg-[#FAED8F]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                isActive ? 'bg-white/20 text-[#FAED8F]' : 'bg-[#FAF7F2] text-[#6B6875]'
              }`}>
                {tab.count}
              </span>
              {tab.alert && tab.count > 0 && (
                <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
              )}
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MEDIA-FIRST REEL GALLERY (PHYSICAL-DIGITAL SLABS)
      ────────────────────────────────────────────────────────────── */}
      {filteredContent.length === 0 ? (
        <div className="p-16 rounded-5xl bg-white border-3 border-[#0D0C11] text-center space-y-4">
          <Archive className="w-12 h-12 text-[#6B6875] mx-auto" />
          <h3 className="font-obviously text-2xl uppercase font-black">No reels in this orbital slot</h3>
          <p className="text-xs text-[#6B6875] font-semibold max-w-sm mx-auto">
            Everything is on track. Trigger a new synthesis or return to "ALL REELS".
          </p>
          <button
            onClick={() => setSelectedFilter('All')}
            className="px-6 py-2.5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase btn-editorial-sm"
          >
            Show All Content
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-5xl border-3 border-[#0D0C11] shadow-editorial-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group ${
                item.status === 'Ready for Review' ? 'bg-[#FFF8D6] ring-2 ring-[#FF5500]/30' : 'bg-white'
              }`}
            >
              <div>
                
                {/* 9:16 Kinetic Cinema Slab Container */}
                <div 
                  onClick={() => onReviewContent(item)}
                  className="w-full h-[360px] rounded-[30px] border-2 border-[#0D0C11] overflow-hidden mb-5 shadow-editorial-sm cursor-pointer relative"
                >
                  <KineticReelPlayer
                    reel={item}
                    compact={true}
                    interactive={false}
                  />

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 bg-[#0D0C11]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="px-4 py-2 bg-[#FAED8F] text-[#0D0C11] rounded-full font-obviously text-xs font-black uppercase border-2 border-[#0D0C11] shadow-editorial-sm flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Theater</span>
                    </span>
                  </div>
                </div>

                {/* Status & Date Line */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[9px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full border border-[#0D0C11] ${
                    item.status === 'Ready for Review' ? 'bg-[#FF5500] text-white' :
                    item.status === 'Scheduled' ? 'bg-[#FAED8F] text-[#0D0C11]' :
                    item.status === 'Published' ? 'bg-[#10B981] text-white' :
                    'bg-[#EFECE6] text-[#6B6875]'
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-[11px] font-mono text-[#6B6875]">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => onReviewContent(item)}
                  className="font-obviously text-xl font-black uppercase leading-tight text-[#0D0C11] mb-2 cursor-pointer hover:text-[#FF5500] transition-colors"
                >
                  {item.title}
                </h3>

                {/* Progressive summary */}
                <p className="text-xs text-[#6B6875] font-semibold line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Published Velocity Highlights */}
                {item.status === 'Published' && (
                  <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#0D0C11]/20 flex items-center justify-between text-xs font-mono font-bold text-[#0D0C11] mb-4">
                    <span>🔥 {item.stats.views}</span>
                    <span>↗ {item.stats.shares}</span>
                    <span>★ {item.stats.saves}</span>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#0D0C11]/10 flex items-center gap-2">
                <button
                  onClick={() => onReviewContent(item)}
                  className="flex-1 py-2.5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase btn-editorial-sm flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Inspect</span>
                </button>

                {item.status === 'Ready for Review' && (
                  <>
                    <button
                      onClick={() => onApproveContent(item.id)}
                      className="px-4 py-2.5 bg-[#10B981] text-white rounded-full font-black text-xs uppercase btn-editorial-sm flex items-center gap-1"
                      title="Approve for Broadcast"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => onRequestChanges(item)}
                      className="px-3 py-2.5 bg-white text-[#0D0C11] rounded-full font-black text-xs uppercase border border-[#0D0C11] hover:bg-gray-100"
                      title="Request Hook Revisions"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
