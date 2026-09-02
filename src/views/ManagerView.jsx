import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  BarChart2, 
  Calendar, 
  Zap, 
  Sliders,
  RefreshCw,
  ThumbsUp,
  XCircle
} from 'lucide-react';
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

  // Handle user sending a message or clicking a quick prompt
  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate smart manager processing
    setTimeout(() => {
      generateManagerResponse(query);
      setIsTyping(false);
    }, 900);
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
        text: 'Educational breakdowns are currently your strongest format. They generate 3.2x more shares and 42% higher watch time than standard narrative reels.',
        richType: 'best_performing',
        data: {
          reels: [
            { id: 'reel-3', title: 'Why Meetings Destroy Productivity', views: '82.4k views', shares: '1.8k shares', badge: '#1 Viral' },
            { id: 'reel-5', title: 'Stop Doing 24/7 Reels Manually', views: '64.1k views', shares: '920 shares', badge: '#2 Converter' },
            { id: 'reel-extra', title: 'The 30-Second Context Switching Cost', views: '49.2k views', shares: '750 shares', badge: '#3 Steady' }
          ],
          suggestedAction: {
            title: 'Create another breakdown around asynchronous sprint planning.',
            actionTopic: 'How async sprint planning cuts 6 hours of unnecessary Slack chatter'
          }
        }
      };
    } else if (lower.includes('3 reel ideas') || lower.includes('ideas') || lower.includes('what should we post')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'Here are 3 high-probability angles algorithmic signals detected in your niche today:',
        richType: 'reel_ideas',
        data: {
          ideas: [
            {
              id: 'idea-1',
              number: 1,
              title: 'Why Founders Who Reply Instantly Stay Broke',
              hook: 'Every time you answer a Slack ping in 30 seconds, you reset your deep work timer by 23 minutes.',
              niche: 'Deep Work / Founder Habit',
              estViews: '70k - 90k'
            },
            {
              id: 'idea-2',
              number: 2,
              title: 'The Hidden Cost of "Quick Syncs"',
              hook: 'A 15-minute quick sync doesn’t cost 15 minutes. It costs 2 hours of engineering flow state.',
              niche: 'Team Productivity',
              estViews: '85k - 110k'
            },
            {
              id: 'idea-3',
              number: 3,
              title: 'How We Scaled Audience With 0 Video Filming',
              hook: 'POV: You built a 100k audience while everyone else was stuck filming 50 takes on a ring light.',
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
        text: 'Done. I swapped the initial question hook with an accusatory result hook. This pattern boosts 3-second hold rates by +51% on Instagram reels.',
        richType: 'hook_changed',
        data: {
          oldHook: 'Ever wondered why your team feels overwhelmed by software?',
          newHook: 'Stop letting 8 SaaS apps steal 2 hours of your engineers’ day. Here is the mathematical proof context switching is bankrupting you.',
          reelTitle: 'The Hidden Cost of Tool Overload'
        }
      };
    } else if (lower.includes('schedule this for friday') || lower.includes('schedule') || lower.includes('friday')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'Locked in. I scheduled "The Hidden Cost of Tool Overload" for Friday, Sept 5 at 6:00 PM EST (your audience peak engagement window).',
        richType: 'scheduled_confirmation',
        data: {
          scheduledSlot: 'Friday, Sept 5 • 6:00 PM EST',
          account: '@startupfounder (Instagram)',
          permission: 'Auto-publish enabled'
        }
      };
    } else if (lower.includes('why did you choose this script') || lower.includes('why') || lower.includes('reasoning')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'Here is the strategic reasoning behind this script:\n\n1. Educational retention: Problem-solution structure keeps 71% of viewers past the 15-second dropoff mark.\n2. Contrarian angle: Challenging the popular assumption that "more tools = more efficiency" drives comment debates.\n3. High Save-to-View ratio: Bulleted takeaways at 0:18 encourage users to bookmark the reel for later.',
        richType: 'rationale'
      };
    } else if (lower.includes('system') || lower.includes('doing') || lower.includes('waiting for approval')) {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: 'System health is optimal. Currently:\n\n• 1 Reel is waiting for your review ("Why Productivity Tools Make Teams Slower")\n• 2 Reels are undergoing autonomous synthesis\n• Next scheduled broadcast: Friday at 6:00 PM',
        richType: 'system_status'
      };
    } else {
      reply = {
        id: `mgr-${Date.now()}`,
        sender: 'manager',
        time: nowTime,
        text: `Understood! I’m analyzing your account's algorithmic footprint for "${query}". Would you like me to generate a new reel script or pull comparative performance metrics?`,
        quickSuggestions: [
          "Make me 3 reel ideas for this week",
          "What's performing best?",
          "Schedule this for Friday",
          "Why did you choose this script?"
        ]
      };
    }

    setMessages(prev => [...prev, reply]);
  };

  const handleCreateIdea = (idea) => {
    onCreateFromManager(idea.title);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      
      {/* Top Banner explaining Manager purpose */}
      <div className="bg-[#FCE7F3] p-6 rounded-4xl border-3 border-brand-dark shadow-pop flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-dark text-[#F472B6] border-2 border-brand-dark flex items-center justify-center font-obviously text-2xl">
            🤖
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-pink-800">
              <span className="w-2 h-2 rounded-full bg-pink-600 animate-ping" />
              Autonomous AI Partner
            </div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase font-obviously tracking-tight leading-none">
              VIRALYST MANAGER
            </h1>
            <p className="text-xs font-semibold text-gray-700 mt-1">
              Natural-language control over your entire content & analytics pipeline.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-white px-3 py-1.5 rounded-full border border-brand-dark font-bold text-gray-800 shadow-sm">
            Status: Active & Listening
          </span>
        </div>
      </div>

      {/* Main Chat Conversation Container */}
      <div className="bg-white rounded-5xl border-3 border-brand-dark shadow-pop p-6 sm:p-8 min-h-[520px] flex flex-col justify-between">
        
        {/* Chat Messages Log */}
        <div className="space-y-6 overflow-y-auto max-h-[580px] pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'manager' && (
                <div className="w-9 h-9 rounded-2xl bg-[#FAED8F] border-2 border-brand-dark flex items-center justify-center font-black text-sm flex-shrink-0 mt-1 shadow-sm">
                  V
                </div>
              )}

              <div className={`max-w-xl ${msg.sender === 'user' ? 'order-1' : 'order-2'}`}>
                
                {/* Text Bubble */}
                <div
                  className={`p-4 sm:p-5 rounded-3xl text-sm sm:text-base font-semibold leading-relaxed border-2 border-brand-dark shadow-pop-sm ${
                    msg.sender === 'user'
                      ? 'bg-brand-dark text-white rounded-tr-none'
                      : 'bg-[#FFFDF7] text-brand-dark rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Rich Response: Best Performing Reels (Direct from user prompt spec) */}
                {msg.richType === 'best_performing' && msg.data && (
                  <div className="mt-3 bg-[#FFF8D6] p-5 rounded-3xl border-2 border-brand-dark shadow-pop-sm space-y-3">
                    <div className="text-xs font-black uppercase tracking-wider text-brand-dark">
                      Top Ranked Reels This Period:
                    </div>

                    <div className="space-y-2">
                      {msg.data.reels.map((reel, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-2xl border border-brand-dark flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-brand-yellow-butter rounded-md border border-brand-dark mr-2">
                              {reel.badge}
                            </span>
                            <span className="font-bold text-xs sm:text-sm text-brand-dark">{reel.title}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-black text-brand-orange">{reel.views}</span>
                            <span className="text-[10px] text-gray-500 block">{reel.shares}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Suggested Action Bar */}
                    <div className="pt-3 border-t border-brand-dark/20">
                      <div className="text-xs font-black uppercase text-gray-700 mb-1">
                        Suggested Action:
                      </div>
                      <p className="text-xs font-bold text-brand-dark mb-3">
                        {msg.data.suggestedAction.title}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => onCreateFromManager(msg.data.suggestedAction.actionTopic)}
                          className="px-4 py-2 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center gap-1.5"
                        >
                          <Zap className="w-3.5 h-3.5 text-yellow-300" />
                          <span>Create it</span>
                        </button>
                        <button
                          onClick={() => onNavigate('performance')}
                          className="px-4 py-2 bg-white text-brand-dark rounded-full font-bold text-xs uppercase border border-brand-dark hover:bg-gray-100"
                        >
                          Show analysis
                        </button>
                        <button
                          onClick={() => handleSendMessage("Ignore that for now.")}
                          className="px-4 py-2 bg-transparent text-gray-600 rounded-full font-bold text-xs uppercase hover:text-gray-900"
                        >
                          Ignore
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rich Response: 3 Reel Ideas with "Use Idea" actions */}
                {msg.richType === 'reel_ideas' && msg.data && (
                  <div className="mt-3 space-y-3">
                    {msg.data.ideas.map((idea) => (
                      <div key={idea.id} className="bg-[#CFFAFE] p-4 rounded-3xl border-2 border-brand-dark shadow-pop-sm flex flex-col justify-between gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-white rounded-full border border-brand-dark">
                            Idea #{idea.number} • {idea.niche}
                          </span>
                          <span className="text-[10px] font-bold text-cyan-900">
                            Est: {idea.estViews}
                          </span>
                        </div>

                        <h4 className="font-obviously text-sm font-black uppercase leading-tight">
                          {idea.title}
                        </h4>

                        <p className="text-xs text-gray-700 italic bg-white/70 p-2.5 rounded-xl border border-brand-dark/20">
                          Hook: "{idea.hook}"
                        </p>

                        <button
                          onClick={() => handleCreateIdea(idea)}
                          className="self-start px-4 py-1.5 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm flex items-center gap-1.5 mt-1"
                        >
                          <span>Use idea #{idea.number}</span>
                          <ArrowRight className="w-3 h-3 text-cyan-300" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Rich Response: Hook Changed */}
                {msg.richType === 'hook_changed' && msg.data && (
                  <div className="mt-3 bg-[#FEF08A] p-4 rounded-3xl border-2 border-brand-dark shadow-pop-sm space-y-2 text-xs font-bold">
                    <div className="text-brand-orange uppercase font-black">Updated Hook on "{msg.data.reelTitle}":</div>
                    <div className="line-through text-gray-500 text-[11px]">{msg.data.oldHook}</div>
                    <div className="text-emerald-800 bg-white p-2.5 rounded-xl border border-brand-dark font-black">
                      ✓ {msg.data.newHook}
                    </div>
                  </div>
                )}

                {/* Rich Response: Scheduled Confirmation */}
                {msg.richType === 'scheduled_confirmation' && msg.data && (
                  <div className="mt-3 bg-[#F5F3FF] p-4 rounded-3xl border-2 border-brand-dark shadow-pop-sm flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black text-purple-900 uppercase">Publish Slot Confirmed</div>
                      <div className="text-sm font-bold text-brand-dark mt-0.5">{msg.data.scheduledSlot}</div>
                      <div className="text-[10px] text-gray-500">{msg.data.account}</div>
                    </div>
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                )}

                {/* Quick Suggestion Chips attached to this message */}
                {msg.quickSuggestions && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {msg.quickSuggestions.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSendMessage(sug)}
                        className="px-3.5 py-1.5 bg-[#FFF8D6] text-brand-dark rounded-full font-bold text-xs uppercase border border-brand-dark hover:bg-yellow-300 transition-colors shadow-sm"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}

                <div className={`text-[10px] text-gray-400 font-mono mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.time}
                </div>

              </div>

              {msg.sender === 'user' && (
                <div className="w-9 h-9 rounded-2xl bg-brand-dark text-white border-2 border-brand-dark flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1 shadow-sm">
                  You
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 items-center text-xs font-bold text-gray-500 italic animate-pulse">
              <div className="w-8 h-8 rounded-2xl bg-[#FAED8F] border-2 border-brand-dark flex items-center justify-center font-black text-xs">
                V
              </div>
              <span>VIRALYST Manager is analyzing accounts and formatting reply...</span>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar & Suggested Prompt Pills */}
        <div className="mt-6 pt-4 border-t-2 border-brand-dark/10 space-y-3">
          
          {/* Quick Prompts Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-bold text-gray-400 uppercase text-[10px] flex-shrink-0">Ask:</span>
            <button
              onClick={() => handleSendMessage("What's performing best?")}
              className="px-3 py-1 rounded-full bg-gray-100 hover:bg-brand-yellow-butter border border-brand-dark/20 font-bold whitespace-nowrap transition-colors"
            >
              "What's performing best?"
            </button>
            <button
              onClick={() => handleSendMessage("Make me 3 reel ideas for this week")}
              className="px-3 py-1 rounded-full bg-gray-100 hover:bg-brand-yellow-butter border border-brand-dark/20 font-bold whitespace-nowrap transition-colors"
            >
              "Make me 3 reel ideas"
            </button>
            <button
              onClick={() => handleSendMessage("Make the hook more aggressive")}
              className="px-3 py-1 rounded-full bg-gray-100 hover:bg-brand-yellow-butter border border-brand-dark/20 font-bold whitespace-nowrap transition-colors"
            >
              "Make hook more aggressive"
            </button>
            <button
              onClick={() => handleSendMessage("Schedule this for Friday")}
              className="px-3 py-1 rounded-full bg-gray-100 hover:bg-brand-yellow-butter border border-brand-dark/20 font-bold whitespace-nowrap transition-colors"
            >
              "Schedule this for Friday"
            </button>
          </div>

          {/* Prompt Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask manager: 'Why did this reel fail?' or 'Make me a reel about X'..."
              className="flex-1 px-5 py-3.5 rounded-full border-2 border-brand-dark text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-amber bg-[#FFFDF7]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="px-6 py-3.5 bg-brand-dark text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
