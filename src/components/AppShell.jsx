import React, { useState } from 'react';
import { 
  Home, 
  Bot, 
  PlusCircle, 
  Film, 
  BarChart3, 
  Bell, 
  Settings, 
  HelpCircle, 
  LogOut, 
  User, 
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Zap,
  Activity
} from 'lucide-react';

export default function AppShell({ 
  currentView, 
  onNavigate, 
  onOpenSettings, 
  onOpenNotifications, 
  onOpenHelp, 
  onOpenFirstTimeSetup,
  onSignOut,
  onBackToLanding,
  unreadNotificationsCount = 2,
  children 
}) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navTabs = [
    { id: 'home', label: 'HOME', code: '01', icon: Home, indicator: '1 ACTION' },
    { id: 'manager', label: 'MANAGER', code: '02', icon: Bot, indicator: 'AI BOT' },
    { id: 'create', label: 'CREATE', code: '03', icon: PlusCircle, indicator: 'STUDIO' },
    { id: 'content', label: 'CONTENT', code: '04', icon: Film, indicator: '6 REELS' },
    { id: 'performance', label: 'PERFORMANCE', code: '05', icon: BarChart3, indicator: '+31%' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0D0C11] flex flex-col selection:bg-[#FAED8F] selection:text-[#0D0C11]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL TOP MASTHEAD
      ────────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-[#0D0C11] px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Mark & Active System Pulse */}
          <div className="flex items-center gap-3">
            <div 
              onClick={onBackToLanding}
              className="flex items-center gap-2.5 cursor-pointer group"
              title="Return to Public Presentation"
            >
              <div className="w-9 h-9 rounded-2xl bg-[#FAED8F] border-2 border-[#0D0C11] shadow-editorial-sm flex items-center justify-center font-obviously text-lg group-hover:rotate-6 transition-transform">
                V
              </div>
              <span className="font-obviously text-xl font-black uppercase tracking-tight">
                VIRALYST
              </span>
            </div>

            <div className="h-5 w-[2px] bg-[#0D0C11]/20 hidden sm:block" />

            {/* Live Autopilot Status Beacon */}
            <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-[#0D0C11] text-[10px] font-mono font-bold tracking-wider shadow-editorial-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#0D0C11]">SIGNAL PROPAGATING</span>
              <span className="text-[#6B6875]">/ @acmetech</span>
            </div>
          </div>

          {/* Primary Navigation Mode Switcher (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white p-1.5 rounded-full border-2 border-[#0D0C11] shadow-editorial">
            {navTabs.map((tab) => {
              const isActive = currentView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onNavigate(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0D0C11] text-white shadow-sm'
                      : 'text-[#2A2930] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span className={`text-[9px] font-mono ${isActive ? 'text-[#FAED8F]' : 'text-[#6B6875]'}`}>
                    {tab.code}
                  </span>
                  <span>{tab.label}</span>
                  {tab.indicator && (
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? 'bg-white/20 text-[#FAED8F]' : 'bg-[#EFECE6] text-[#6B6875]'
                    }`}>
                      {tab.indicator}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Secondary Utilities: Ask Manager, Notifications, Account */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Direct Ask Manager Summon */}
            <button
              onClick={() => onNavigate('manager')}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FAED8F] text-[#0D0C11] rounded-full border-2 border-[#0D0C11] text-xs font-black btn-editorial-sm"
              title="Summon AI Operating Manager"
            >
              <Bot className="w-3.5 h-3.5 text-[#0D0C11]" />
              <span>Ask Manager</span>
            </button>

            {/* Notifications Bell */}
            <button
              onClick={onOpenNotifications}
              className="relative w-9 h-9 rounded-full bg-white text-[#0D0C11] border-2 border-[#0D0C11] flex items-center justify-center hover:bg-[#FAF7F2] btn-editorial-sm"
              title="Human-Readable System Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5500] text-white rounded-full text-[9px] font-mono font-black flex items-center justify-center border border-[#0D0C11]">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>

            {/* Account / Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1 pl-2 bg-white rounded-full border-2 border-[#0D0C11] hover:bg-gray-50 btn-editorial-sm"
              >
                <div className="w-7 h-7 rounded-full bg-[#0D0C11] text-[#FAED8F] font-obviously font-black flex items-center justify-center text-xs">
                  AC
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-700 mr-1" />
              </button>

              {/* Profile Menu Dropdown */}
              {showProfileMenu && (
                <>
                  <div 
                    onClick={() => setShowProfileMenu(false)} 
                    className="fixed inset-0 z-30" 
                  />
                  <div className="absolute right-0 mt-2 w-60 bg-white rounded-3xl border-2 border-[#0D0C11] shadow-editorial p-2 z-40 space-y-1 animate-in fade-in duration-150">
                    <div className="p-3 border-b border-gray-100">
                      <div className="font-obviously text-sm font-black uppercase">Arjun Chandra</div>
                      <div className="text-[11px] text-[#6B6875] font-mono">aarjunchandra@gmail.com</div>
                    </div>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onOpenSettings();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-gray-100 text-left"
                    >
                      <Settings className="w-4 h-4 text-gray-700" />
                      <span>Settings & Brand</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onOpenFirstTimeSetup();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-gray-100 text-left"
                    >
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Setup Calibration</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onOpenHelp();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-gray-100 text-left"
                    >
                      <HelpCircle className="w-4 h-4 text-gray-700" />
                      <span>Help & Support</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onBackToLanding();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-yellow-50 text-amber-700 text-left"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      <span>Public Landing Page</span>
                    </button>

                    <div className="pt-1 border-t border-gray-100">
                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          onSignOut();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-red-50 text-red-600 text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. MOBILE NAVIGATION DOCK (FIXED BOTTOM)
      ────────────────────────────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-around bg-[#0D0C11] text-white p-2 rounded-full border-2 border-[#0D0C11] shadow-editorial">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`p-2.5 rounded-full flex flex-col items-center relative transition-all ${
                isActive ? 'bg-[#FAED8F] text-[#0D0C11]' : 'text-white/80 hover:text-white'
              }`}
              title={tab.label}
            >
              <Icon className="w-5 h-5" />
              {tab.indicator === '1 ACTION' && !isActive && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FF5500]" />
              )}
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN ENVIRONMENT STAGE
      ────────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 pt-8">
        {children}
      </main>

    </div>
  );
}
