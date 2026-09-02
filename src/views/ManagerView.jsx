import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Calendar, 
  Zap, 
  Flame, 
  Sliders, 
  Eye, 
  ArrowUpRight,
  TrendingUp,
  RefreshCw,
  Terminal
} from 'lucide-react';
import KineticReelPlayer from '../components/KineticReelPlayer';
import { INITIAL_MANAGER_MESSAGES } from '../data/mockData';

export default function ManagerView({ 
  onNavigate, 
  onCreateFromManager, 
  onReviewContent,
  contentList 
}) {
  const [messages, setMessages] = useState(INITIAL_MANAGER_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      generateManagerResponse(query);
      setIsTyping(false);
    }, 750);
  };

  const generateManagerResponse = (query) => {
    const lower = query.toLowerCase();
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let reply = {};

    if (lower.includes('performing best') || lower.includes('best') || lower.includes('what worked')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'Educational breakdowns are currently your strongest format. They generate 3.2x more saves and 42% higher watch time than standard narrative reels.',
        richType: 'best_performing',
        data: {
          reels: [
            {
              id: 'reel-3',
              title: 'Why Meetings Destroy Productivity',
              hook: 'A 30-minute meeting does not cost 30 minutes. It costs 2 hours of cognitive recovery.',
              views: '82.4k views',
              shares: '1.8k shares',
              duration: '23s',
              videoTheme: 'pink',
              badge: '#1 Viral'
            },
            {
              id: 'reel-5',
              title: 'Stop Doing 24/7 Reels Manually',
              hook: 'POV: You spent 6 hours recording reels today instead of building your product.',
              views: '64.1k views',
              shares: '920 shares',
              duration: '21s',
              videoTheme: 'amber',
              badge: '#2 Converter'
            }
          ],
          suggestedAction: {
            title: 'Synthesize another educational breakdown around async sprint planning.',
            actionTopic: 'How async sprint planning cuts 6 hours of unnecessary Slack chatter'
          }
        }
      };
    } else if (lower.includes('3 reel ideas') || lower.includes('ideas') || lower.includes('what should we post')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'Algorithmic signals detected 3 high-heat friction angles in your niche today:',
        richType: 'reel_ideas',
        data: {
          ideas: [
            {
              id: 'idea-1',
              number: 1,
              title: 'Why Founders Who Reply Instantly Stay Broke',
              hook: 'Every time you answer a Slack ping in 30 seconds, you reset your flow state by 23 minutes.',
              niche: 'Deep Work / Founder Habit',
              estViews: '70k - 90k'
            },
            {
              id: 'idea-2',
              number: 2,
              title: 'The Hidden Cost of "Quick Syncs"',
              hook: 'A 15-minute quick sync does not cost 15 minutes. It costs 2 hours of engineering flow state.',
              niche: 'Team Productivity',
              estViews: '85k - 110k'
            },
            {
              id: 'idea-3',
              number: 3,
              title: 'How We Scaled Audience With 0 Video Filming',
              hook: 'POV: You built an audience while everyone else was stuck filming 50 takes on a ring light.',
              niche: 'Automation / Tech',
              estViews: '60k - 75k'
            }
          ]
        }
      };
    } else if (lower.includes('make the hook more aggressive') || lower.includes('hook') || lower.includes('aggressive')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'Hook sharpened. Swapped the passive question for an accusatory contrast opening. Increases 3s hold rate by +51%.',
        richType: 'hook_changed',
        data: {
          oldHook: 'Ever wondered why your team feels overwhelmed by software?',
          newHook: 'Stop letting 8 SaaS apps steal 2 hours of your engineers’ day. Here is the mathematical proof context switching is bankrupting you.',
          reelTitle: 'The Hidden Cost of Tool Overload'
        }
      };
    } else if (lower.includes('schedule') || lower.includes('friday')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'Locked in. I scheduled "The Hidden Cost of Tool Overload" for Friday, Sept 5 at 6:00 PM EST (your audience peak velocity window).',
        richType: 'scheduled_confirmation',
        data: {
          slot: 'Friday, Sept 5 • 6:00 PM EST',
          account: '@startupfounder (Instagram)',
          permission: 'Auto-publish approved'
        }
      };
    } else if (lower.includes('why') || lower.includes('script') || lower.includes('reasoning')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'Strategic reasoning behind this script:\n\n1. 3s Retention: Result hook prevents the typical 45% swipe dropoff.\n2. Contrarian premise: Challenging the belief that "more tools = more efficiency" sparks high comment debate.\n3. Save Trigger: Bulleted practical framework at 0:18 drives direct saves.',
        richType: 'rationale'
      };
    } else {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: `Understood. Analyzing account footprint for "${query}". I can synthesize a new reel cut or cross-reference audience retention metrics.`,
        quickSuggestions: [
          "What's performing best?",
          "Make me 3 reel ideas for this week",
          "Make the hook more aggressive",
          "Schedule this for Friday"
        ]
      };
    }

    setMessages(prev => [...prev, reply]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-24">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL HEADER (NEURAL OPERATING FLOOR)
      ────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#0D0C11] pb-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6875] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>NEURAL CONTENT INTERFACE • 24/7 EXECUTIVE ACCESS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-obviously tracking-tight leading-none text-[#0D0C11]">
            VIRALYST MANAGER
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6B6875]">
          <span>CONNECTED TO ENTIRE ARCHIVE & ALGORITHM RADAR</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. CONVERSATION / WORKSPACE HYBRID CHAMBER
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-5xl border-3 border-[#0D0C11] shadow-editorial-lg p-6 sm:p-10 min-h-[580px] flex flex-col justify-between">
        
        {/* Messages Stream */}
        <div className="space-y-8 overflow-y-auto max-h-[640px] pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'manager' && (
                <div className="w-10 h-10 rounded-2xl bg-[#FAED8F] border-2 border-[#0D0C11] flex items-center justify-center font-obviously text-sm font-black flex-shrink-0 shadow-editorial-sm mt-1">
                  V
                </div>
              )}

              <div className={`max-w-2xl ${msg.sender === 'user' ? 'order-1' : 'order-2'}`}>
                
                {/* Bubble / Statement */}
                <div
                  className={`p-5 sm:p-6 rounded-4xl text-sm sm:text-base font-semibold leading-relaxed border-2 border-[#0D0C11] shadow-editorial-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#0D0C11] text-white rounded-tr-none'
                      : 'bg-[#FAF7F2] text-[#0D0C11] rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* ─────────────────────────────────────────────────────────────
                    RICH RESPONSE: REAL REEL OBJECTS MATERIALIZE DIRECTLY
                ────────────────────────────────────────────────────────────── */}
                {msg.richType === 'best_performing' && msg.data && (
                  <div className="mt-4 p-6 rounded-4xl bg-[#FFF8D6] border-2 border-[#0D0C11] shadow-editorial space-y-6">
                    <div className="flex items-center justify-between text-xs font-mono font-black uppercase text-[#0D0C11]">
                      <span>EVIDENCE: TOP VELOCITY REELS</span>
                      <span className="text-[#FF5500]">VERIFIED ON-AIR METRICS</span>
                    </div>

                    {/* The 2 Materialized Interactive Reel Slabs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {msg.data.reels.map((reel) => (
                        <div key={reel.id} className="bg-white p-4 rounded-3xl border-2 border-[#0D0C11] shadow-editorial-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-0.5 rounded-full bg-[#FAED8F] text-[#0D0C11] font-mono font-black text-[9px] uppercase border border-[#0D0C11]">
                                {reel.badge}
                              </span>
                              <span className="text-xs font-mono font-black text-[#FF5500]">
                                {reel.views}
                              </span>
                            </div>
                            <h5 className="font-obviously text-sm font-black uppercase leading-tight mb-2">
                              {reel.title}
                            </h5>
                            <p className="text-[11px] text-[#6B6875] font-semibold italic bg-[#FAF7F2] p-2.5 rounded-xl border border-[#0D0C11]/10">
                              "{reel.hook}"
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-[#0D0C11]/10 flex items-center justify-between text-xs">
                            <span className="font-mono text-[10px] text-[#6B6875]">{reel.shares}</span>
                            <button
                              onClick={() => onReviewContent(reel)}
                              className="text-[#0D0C11] font-black uppercase hover:underline text-[11px]"
                            >
                              Inspect Media →
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Deck */}
                    <div className="pt-4 border-t-2 border-[#0D0C11]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-mono font-bold uppercase text-[#6B6875]">
                          DIRECTIVE:
                        </div>
                        <p className="text-xs font-bold text-[#0D0C11]">
                          {msg.data.suggestedAction.title}
                        </p>
                      </div>

                      <button
                        onClick={() => onCreateFromManager(msg.data.suggestedAction.actionTopic)}
                        className="py-2.5 px-5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase tracking-wider btn-editorial flex items-center gap-2 self-start sm:self-auto"
                      >
                        <Zap className="w-3.5 h-3.5 text-[#FAED8F]" />
                        <span>Synthesize Followup</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* RICH RESPONSE: 3 REEL IDEAS CARDS */}
                {msg.richType === 'reel_ideas' && msg.data && (
                  <div className="mt-4 space-y-3">
                    {msg.data.ideas.map((idea) => (
                      <div key={idea.id} className="p-5 rounded-4xl bg-[#FAF7F2] border-2 border-[#0D0C11] shadow-editorial-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#0D0C11] transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono font-black uppercase px-2 py-0.5 bg-white rounded-full border border-[#0D0C11]">
                              IDEA #{idea.number} • {idea.niche}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#FF5500]">
                              EST: {idea.estViews}
                            </span>
                          </div>
                          <h4 className="font-obviously text-base font-black uppercase leading-tight">
                            {idea.title}
                          </h4>
                          <p className="text-xs text-[#6B6875] font-semibold italic">
                            "{idea.hook}"
                          </p>
                        </div>

                        <button
                          onClick={() => onCreateFromManager(idea.title)}
                          className="px-4 py-2 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase btn-editorial-sm whitespace-nowrap self-start sm:self-center"
                        >
                          Use Idea #{idea.number}
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* RICH RESPONSE: HOOK CHANGED */}
                {msg.richType === 'hook_changed' && msg.data && (
                  <div className="mt-4 p-5 rounded-4xl bg-[#FAED8F] border-2 border-[#0D0C11] shadow-editorial-sm space-y-3">
                    <div className="text-[10px] font-mono font-black uppercase tracking-wider text-[#0D0C11]">
                      HOOK COMPARISON ON "{msg.data.reelTitle}":
                    </div>
                    <div className="line-through text-[#6B6875] text-xs font-mono">
                      {msg.data.oldHook}
                    </div>
                    <div className="bg-white p-3.5 rounded-2xl border-2 border-[#0D0C11] text-xs font-bold text-[#0D0C11]">
                      ✓ {msg.data.newHook}
                    </div>
                  </div>
                )}

                {/* RICH RESPONSE: SCHEDULE CONFIRMED */}
                {msg.richType === 'scheduled_confirmation' && msg.data && (
                  <div className="mt-4 p-5 rounded-4xl bg-white border-2 border-[#0D0C11] shadow-editorial-sm flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase text-[#10B981]">
                        BROADCAST SLOT CONFIRMED
                      </div>
                      <div className="text-sm font-black font-obviously uppercase text-[#0D0C11] mt-0.5">
                        {msg.data.slot}
                      </div>
                      <div className="text-[11px] font-mono text-[#6B6875]">{msg.data.account}</div>
                    </div>
                    <Calendar className="w-8 h-8 text-[#0D0C11]" />
                  </div>
                )}

                <div className={`text-[10px] text-[#6B6875] font-mono mt-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.time}
                </div>

              </div>

              {msg.sender === 'user' && (
                <div className="w-10 h-10 rounded-2xl bg-[#0D0C11] text-white border-2 border-[#0D0C11] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1 shadow-editorial-sm">
                  You
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-xs font-mono font-bold text-[#6B6875] italic animate-pulse">
              <div className="w-8 h-8 rounded-2xl bg-[#FAED8F] border-2 border-[#0D0C11] flex items-center justify-center font-obviously text-xs">
                V
              </div>
              <span>VIRALYST Manager analyzing performance vectors & composing response...</span>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. TACTILE COMMAND DOCK & QUICK PROMPTS
        ────────────────────────────────────────────────────────────── */}
        <div className="mt-8 pt-6 border-t-2 border-[#0D0C11]/10 space-y-3">
          
          {/* Quick Directive Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-mono text-[10px] font-bold text-[#6B6875] uppercase flex-shrink-0">
              DIRECT COMMANDS:
            </span>
            {[
              "What's performing best?",
              "Make me 3 reel ideas for this week",
              "Make the hook more aggressive",
              "Schedule this for Friday",
              "Why did you choose this script?"
            ].map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(chip)}
                className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#FAED8F] border border-[#0D0C11] font-bold text-xs whitespace-nowrap transition-colors shadow-editorial-sm"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Natural-Language Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask manager: 'Why did this reel succeed?' or 'Make me a reel about tool fatigue'..."
              className="flex-1 px-6 py-4 rounded-full border-2 border-[#0D0C11] text-sm sm:text-base font-bold placeholder:text-[#6B6875] focus:outline-none focus:ring-2 focus:ring-[#FF9E00] bg-[#FAF7F2]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="px-7 py-4 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial flex items-center gap-2 disabled:opacity-40"
            >
              <span>Execute</span>
              <Send className="w-3.5 h-3.5 text-[#FAED8F]" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
