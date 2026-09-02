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
  Filter, 
  TrendingUp,
  Flame,
  AlertCircle
} from 'lucide-react';

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
    { id: 'All', label: 'All Content', count: contentList.length },
    { id: 'Ready for Review', label: 'Ready for Review', count: contentList.filter(c => c.status === 'Ready for Review').length, alert: true },
    { id: 'In Progress', label: 'In Progress', count: contentList.filter(c => c.status === 'In Progress').length },
    { id: 'Scheduled', label: 'Scheduled', count: contentList.filter(c => c.status === 'Scheduled').length },
    { id: 'Published', label: 'Published', count: contentList.filter(c => c.status === 'Published').length },
    { id: 'Archived', label: 'Archived', count: contentList.filter(c => c.status === 'Archived').length }
  ];

  const filteredContent = selectedFilter === 'All' 
    ? contentList 
    : contentList.filter(c => c.status === selectedFilter);

  return (
    <div className="space-y-8 pb-16 max-w-6xl mx-auto">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER WITH WORKSPACE TITLE & NEW REEL TRIGGER
      ────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F5F3FF] p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-brand-dark text-xs font-bold uppercase tracking-wider mb-2 text-purple-900">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            Unified Workspace
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-obviously tracking-tight leading-none mb-1">
            CONTENT WORKSPACE
          </h1>
          <p className="font-handwritten text-xl sm:text-2xl text-purple-800 font-bold">
            One clean view. Review, approve, and track every reel without messy pipelines.
          </p>
        </div>

        <button
          onClick={() => onNavigate('create')}
          className="px-6 py-3.5 bg-brand-dark text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Content</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. WORKSPACE TABS (IN PROGRESS, READY FOR REVIEW, SCHEDULED, PUBLISHED, ARCHIVED)
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
              className={`px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-brand-dark text-white shadow-pop-sm -translate-y-0.5'
                  : 'bg-white text-brand-dark hover:bg-[#FFFDF0]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
              }`}>
                {tab.count}
              </span>
              {tab.alert && tab.count > 0 && (
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
              )}
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. CONTENT CARDS GRID
      ────────────────────────────────────────────────────────────── */}
      {filteredContent.length === 0 ? (
        <div className="bg-white p-12 rounded-5xl border-3 border-brand-dark text-center space-y-4">
          <Archive className="w-12 h-12 text-gray-400 mx-auto" />
          <h3 className="font-obviously text-2xl uppercase font-black">No content in this tab</h3>
          <p className="text-sm text-gray-600 font-semibold max-w-sm mx-auto">
            Everything is on track. Create a new reel or switch to "All Content" to inspect other items.
          </p>
          <button
            onClick={() => setSelectedFilter('All')}
            className="px-6 py-2 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm"
          >
            Show All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col justify-between transition-all hover:-translate-y-1 ${
                item.status === 'Ready for Review' ? 'bg-[#FFFDF0] ring-2 ring-pink-400/40' : 'bg-white'
              }`}
            >
              <div>
                
                {/* Visual Thumbnail / Video Preview Box */}
                <div
                  onClick={() => onReviewContent(item)}
                  className={`relative h-44 w-full rounded-3xl mb-4 border-2 border-brand-dark overflow-hidden flex items-center justify-center cursor-pointer group select-none ${
                    item.videoTheme === 'amber' ? 'bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-600 text-white' :
                    item.videoTheme === 'yellow' ? 'bg-gradient-to-tr from-yellow-300 to-amber-400 text-brand-dark' :
                    item.videoTheme === 'pink' ? 'bg-gradient-to-tr from-pink-400 to-rose-500 text-white' :
                    item.videoTheme === 'cyan' ? 'bg-gradient-to-tr from-cyan-400 to-blue-500 text-white' :
                    'bg-gradient-to-tr from-purple-400 to-indigo-600 text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

                  {/* Play circle */}
                  <div className="w-12 h-12 rounded-full bg-white/95 text-brand-dark flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-brand-dark ml-0.5" />
                  </div>

                  {/* Top Duration / Aspect badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[10px] font-black">
                    <span>9:16</span>
                    <span>•</span>
                    <span>{item.duration}</span>
                  </div>

                  {/* Bottom hook teaser */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-[10px] uppercase font-bold text-white/80 line-clamp-1">
                      Objective: {item.objective}
                    </div>
                  </div>
                </div>

                {/* Status Badge & Date */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full border border-brand-dark ${
                    item.status === 'Ready for Review' ? 'bg-[#FCE7F3] text-pink-700' :
                    item.status === 'Scheduled' ? 'bg-[#CFFAFE] text-cyan-800' :
                    item.status === 'Published' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => onReviewContent(item)}
                  className="font-obviously text-xl font-black uppercase leading-tight text-brand-dark mb-2 cursor-pointer hover:text-brand-orange transition-colors"
                >
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-gray-600 font-medium line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Published Performance Stats */}
                {item.status === 'Published' && (
                  <div className="bg-[#FFF8D6] p-3 rounded-2xl border border-brand-dark/20 flex items-center justify-between mb-4 text-xs font-bold text-brand-dark">
                    <span>🔥 {item.stats.views}</span>
                    <span>↗ {item.stats.shares}</span>
                    <span>★ {item.stats.saves}</span>
                  </div>
                )}

              </div>

              {/* Action Buttons: Review, Approve, Request Changes */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onReviewContent(item)}
                    className="flex-1 py-2.5 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Review</span>
                  </button>

                  {item.status === 'Ready for Review' && (
                    <>
                      <button
                        onClick={() => onApproveContent(item.id)}
                        className="px-4 py-2.5 bg-emerald-500 text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center gap-1"
                        title="Approve Reel"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Approve</span>
                      </button>

                      <button
                        onClick={() => onRequestChanges(item)}
                        className="px-3 py-2.5 bg-white text-gray-800 rounded-full font-black text-xs uppercase border border-brand-dark hover:bg-gray-100"
                        title="Request Changes"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
