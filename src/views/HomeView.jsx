import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Send, 
  Play, 
  Flame, 
  TrendingUp,
  MessageSquare,
  HelpCircle,
  Eye,
  Plus
} from 'lucide-react';

export default function HomeView({ 
  contentList, 
  onNavigate, 
  onReviewContent, 
  onApproveContent, 
  onRequestChanges, 
  onOpenCreateWithTopic 
}) {
  // Compute current status counts
  const inProgressCount = contentList.filter(c => c.status === 'In Progress').length;
  const waitingApprovalCount = contentList.filter(c => c.status === 'Ready for Review').length;
  const scheduledCount = contentList.filter(c => c.status === 'Scheduled').length;
  const publishedCount = contentList.filter(c => c.status === 'Published').length;

  const waitingApprovalItem = contentList.find(c => c.status === 'Ready for Review');
  const recentItems = contentList.slice(0, 3);

  return (
    <div className="space-y-8 pb-16 max-w-6xl mx-auto">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER GREETING & RIDICULOUSLY SIMPLE COMMAND STATEMENT
      ────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-[#FFF8D6] p-6 sm:p-8 rounded-5xl border-3 border-brand-dark shadow-pop">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-brand-dark text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Social Autopilot
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-obviously tracking-tight leading-none mb-2">
            WHAT MATTERS RIGHT NOW
          </h1>
          <p className="font-handwritten text-xl sm:text-2xl text-brand-orange font-bold">
            All systems running. 1 piece waiting for your stamp of approval.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('manager')}
            className="px-5 py-3 bg-white text-brand-dark rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark btn-pop-sm flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-brand-amber" />
            <span>Ask Manager</span>
          </button>
          <button
            onClick={() => onNavigate('create')}
            className="px-6 py-3 bg-brand-dark text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Reel</span>
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. CURRENT PIPELINE STATUS (4 SIMPLE BADGES)
      ────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        {/* Waiting For Approval (Highlighted if > 0) */}
        <div 
          onClick={() => onNavigate('content', 'Ready for Review')}
          className={`p-5 rounded-4xl border-2 border-brand-dark shadow-pop cursor-pointer transition-all hover:-translate-y-1 ${
            waitingApprovalCount > 0 ? 'bg-[#FCE7F3] ring-2 ring-pink-500/50' : 'bg-white'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-gray-700">Needs Approval</span>
            <AlertCircle className={`w-5 h-5 ${waitingApprovalCount > 0 ? 'text-pink-600 animate-bounce' : 'text-gray-400'}`} />
          </div>
          <div className="text-3xl sm:text-4xl font-black font-obviously text-brand-dark">
            {waitingApprovalCount}
          </div>
          <div className="text-[11px] font-semibold text-gray-600 mt-1">
            {waitingApprovalCount > 0 ? 'Action required today' : 'All approved!'}
          </div>
        </div>

        {/* Content Being Worked On */}
        <div 
          onClick={() => onNavigate('content', 'In Progress')}
          className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop cursor-pointer transition-all hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-gray-700">Being Created</span>
            <Clock className="w-5 h-5 text-amber-500 animate-spin-slow" />
          </div>
          <div className="text-3xl sm:text-4xl font-black font-obviously text-brand-dark">
            {inProgressCount}
          </div>
          <div className="text-[11px] font-semibold text-gray-600 mt-1">
            Internal AI synthesis
          </div>
        </div>

        {/* Scheduled Content */}
        <div 
          onClick={() => onNavigate('content', 'Scheduled')}
          className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop cursor-pointer transition-all hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-gray-700">Scheduled</span>
            <Send className="w-5 h-5 text-cyan-600" />
          </div>
          <div className="text-3xl sm:text-4xl font-black font-obviously text-brand-dark">
            {scheduledCount}
          </div>
          <div className="text-[11px] font-semibold text-gray-600 mt-1">
            Queued for publishing
          </div>
        </div>

        {/* Published Content */}
        <div 
          onClick={() => onNavigate('content', 'Published')}
          className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop cursor-pointer transition-all hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-gray-700">Published</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-3xl sm:text-4xl font-black font-obviously text-brand-dark">
            {publishedCount}
          </div>
          <div className="text-[11px] font-semibold text-gray-600 mt-1">
            Live on Instagram
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. THIS WEEK SNAPSHOT
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-white p-6 sm:p-7 rounded-5xl border-3 border-brand-dark shadow-pop flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-auto">
          <div className="text-xs font-black uppercase text-gray-500 tracking-wider mb-1">
            Performance Direction
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl sm:text-3xl font-black font-obviously text-brand-dark">
              THIS WEEK
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-black">
              <TrendingUp className="w-3.5 h-3.5" />
              +31% Reach Spike
            </span>
          </div>
          <p className="text-xs text-gray-600 font-semibold mt-1">
            Educational reels beat your previous monthly average. Audience share rate is up 42%.
          </p>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 sm:gap-10 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8">
          <div>
            <div className="text-2xl font-black font-obviously text-brand-dark">6</div>
            <div className="text-[11px] font-bold text-gray-500 uppercase">Created</div>
          </div>
          <div>
            <div className="text-2xl font-black font-obviously text-brand-dark">4</div>
            <div className="text-[11px] font-bold text-gray-500 uppercase">Approved</div>
          </div>
          <div>
            <div className="text-2xl font-black font-obviously text-brand-dark">3</div>
            <div className="text-[11px] font-bold text-gray-500 uppercase">Published</div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. WHAT VIRALYST RECOMMENDS NEXT (3–5 CARDS MAX)
      ────────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-amber fill-brand-amber" />
            <h2 className="text-xl sm:text-2xl font-black uppercase font-obviously tracking-tight">
              WHAT VIRALYST RECOMMENDS NEXT
            </h2>
          </div>
          <span className="text-xs font-bold text-gray-500">Autonomous Strategy</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Card 1: Urgent Approval */}
          {waitingApprovalItem && (
            <div className="bg-[#FCE7F3] p-6 rounded-4xl border-2 border-brand-dark shadow-pop flex flex-col justify-between">
              <div>
                <span className="inline-block text-[10px] font-black uppercase px-2.5 py-0.5 bg-white rounded-full border border-brand-dark mb-3 text-pink-700">
                  Ready for Review
                </span>
                <h3 className="font-obviously text-lg font-black uppercase leading-tight mb-2">
                  {waitingApprovalItem.title}
                </h3>
                <p className="text-xs text-gray-700 font-medium line-clamp-2 mb-4">
                  {waitingApprovalItem.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onReviewContent(waitingApprovalItem)}
                  className="flex-1 py-2 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Review Reel</span>
                </button>
                <button
                  onClick={() => onApproveContent(waitingApprovalItem.id)}
                  className="px-3.5 py-2 bg-emerald-500 text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center justify-center"
                  title="Approve immediately"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Card 2: Trending Format */}
          <div className="bg-[#CFFAFE] p-6 rounded-4xl border-2 border-brand-dark shadow-pop flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] font-black uppercase px-2.5 py-0.5 bg-white rounded-full border border-brand-dark mb-3 text-cyan-800">
                Format Insight
              </span>
              <h3 className="font-obviously text-lg font-black uppercase leading-tight mb-2">
                Educational Breakdowns Beat Your Average
              </h3>
              <p className="text-xs text-gray-700 font-medium mb-4">
                Videos explaining "why common methods fail" generated 38% higher saves this week.
              </p>
            </div>

            <button
              onClick={() => onOpenCreateWithTopic('Why common productivity systems fail teams')}
              className="w-full py-2 bg-white text-brand-dark rounded-full font-black text-xs uppercase btn-pop-sm flex items-center justify-center gap-1.5"
            >
              <span>Create breakdown on X</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Card 3: Niche Recommendation */}
          <div className="bg-[#FFF8D6] p-6 rounded-4xl border-2 border-brand-dark shadow-pop flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] font-black uppercase px-2.5 py-0.5 bg-white rounded-full border border-brand-dark mb-3 text-amber-800">
                Next Best Move
              </span>
              <h3 className="font-obviously text-lg font-black uppercase leading-tight mb-2">
                Create Reel Around Meeting Fatigue
              </h3>
              <p className="text-xs text-gray-700 font-medium mb-4">
                High resonance query across software founders. Projected to cross 75k views.
              </p>
            </div>

            <button
              onClick={() => onOpenCreateWithTopic('Why meetings destroy productivity')}
              className="w-full py-2 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center justify-center gap-1.5"
            >
              <span>Create this now</span>
              <ArrowRight className="w-3 h-3 text-yellow-300" />
            </button>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. RECENT CONTENT PREVIEW (MINIMAL CARDS WITH IMPORTANT ACTIONS)
      ────────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black uppercase font-obviously tracking-tight">
              RECENT CONTENT
            </h2>
            <span className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full font-bold">
              Latest Pieces
            </span>
          </div>

          <button
            onClick={() => onNavigate('content')}
            className="text-xs font-black uppercase tracking-wider text-brand-orange hover:underline flex items-center gap-1"
          >
            <span>View All Workspace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-4xl border-2 border-brand-dark shadow-pop flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail Bar with theme */}
                <div 
                  onClick={() => onReviewContent(item)}
                  className={`relative h-28 w-full rounded-2xl mb-4 border-2 border-brand-dark overflow-hidden flex items-center justify-center cursor-pointer ${
                    item.videoTheme === 'amber' ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white' :
                    item.videoTheme === 'yellow' ? 'bg-gradient-to-tr from-yellow-300 to-amber-400 text-brand-dark' :
                    item.videoTheme === 'pink' ? 'bg-gradient-to-tr from-pink-400 to-rose-500 text-white' :
                    'bg-gradient-to-tr from-cyan-400 to-blue-500 text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="w-10 h-10 rounded-full bg-white/90 text-brand-dark flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-brand-dark ml-0.5" />
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] font-black bg-black/60 text-white px-2 py-0.5 rounded-md backdrop-blur-sm">
                    {item.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-brand-dark ${
                    item.status === 'Ready for Review' ? 'bg-[#FCE7F3] text-pink-700' :
                    item.status === 'Scheduled' ? 'bg-[#CFFAFE] text-cyan-800' :
                    item.status === 'Published' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-[11px] text-gray-500 font-semibold">{item.date}</span>
                </div>

                <h3 className="font-obviously text-base font-black uppercase leading-snug line-clamp-2 mb-2">
                  {item.title}
                </h3>
              </div>

              {/* Actions based on status */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                {item.status === 'Ready for Review' ? (
                  <>
                    <button
                      onClick={() => onReviewContent(item)}
                      className="flex-1 py-1.5 bg-brand-dark text-white rounded-full font-bold text-xs uppercase btn-pop-sm text-center"
                    >
                      Review
                    </button>
                    <button
                      onClick={() => onApproveContent(item.id)}
                      className="px-3 py-1.5 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase btn-pop-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => onRequestChanges(item)}
                      className="px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-full font-bold text-xs uppercase border border-gray-300 hover:bg-gray-200"
                      title="Request changes"
                    >
                      Edit
                    </button>
                  </>
                ) : item.status === 'Published' ? (
                  <div className="flex items-center justify-between w-full text-xs font-bold text-gray-700">
                    <span>{item.stats.views} views</span>
                    <button
                      onClick={() => onNavigate('performance')}
                      className="text-brand-orange hover:underline font-black uppercase"
                    >
                      View Result →
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full text-xs font-semibold text-gray-600">
                    <span>{item.scheduledFor}</span>
                    <button
                      onClick={() => onReviewContent(item)}
                      className="text-brand-dark font-bold hover:underline"
                    >
                      Inspect
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          6. IMPORTANT ACTIONS BAR (CLEAR & MINIMAL)
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-[#FFFDF0] p-6 rounded-4xl border-2 border-brand-dark flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-yellow-butter border border-brand-dark flex items-center justify-center font-black text-sm">
            ⚡
          </div>
          <div>
            <div className="text-sm font-black uppercase font-obviously">Quick Client Actions</div>
            <div className="text-xs text-gray-600">Only actions you ever actually need to take</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {waitingApprovalItem && (
            <button
              onClick={() => onReviewContent(waitingApprovalItem)}
              className="px-4 py-2 bg-[#FCE7F3] text-pink-800 rounded-full font-black text-xs uppercase border border-brand-dark btn-pop-sm"
            >
              Review Reel
            </button>
          )}
          <button
            onClick={() => onNavigate('manager')}
            className="px-4 py-2 bg-white text-brand-dark rounded-full font-black text-xs uppercase border border-brand-dark btn-pop-sm"
          >
            Answer a Question
          </button>
          <button
            onClick={() => onNavigate('performance')}
            className="px-4 py-2 bg-white text-brand-dark rounded-full font-black text-xs uppercase border border-brand-dark btn-pop-sm"
          >
            View Result
          </button>
        </div>
      </div>

    </div>
  );
}
