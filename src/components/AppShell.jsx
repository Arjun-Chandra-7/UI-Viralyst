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
  ExternalLink
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
    { id: 'home', label: 'Home', icon: Home, badge: null },
    { id: 'manager', label: 'Manager', icon: Bot, badge: 'AI' },
    { id: 'create', label: 'Create', icon: PlusCircle, badge: null },
    { id: 'content', label: 'Content', icon: Film, badge: '1 Review' },
    { id: 'performance', label: 'Performance', icon: BarChart3, badge: '+31%' }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-brand-dark flex flex-col selection:bg-brand-yellow-butter">
      
      {/* ─────────────────────────────────────────────────────────────
          1. TOP APP HEADER
      ────────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-b-2 border-brand-dark/10 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand Account Pill */}
          <div className="flex items-center gap-3">
            <div 
              onClick={onBackToLanding}
              className="flex items-center gap-2 cursor-pointer group"
              title="Return to Landing Page"
            >
              <div className="w-9 h-9 rounded-2xl bg-brand-yellow-butter border-2 border-brand-dark shadow-pop-sm flex items-center justify-center font-obviously text-lg group-hover:rotate-6 transition-transform">
                V
              </div>
              <span className="font-obviously text-xl font-black uppercase tracking-tight hidden sm:inline">
                VIRALYST
              </span>
            </div>

            <div className="h-5 w-[1.5px] bg-gray-300 hidden sm:block" />

            {/* Current Active Account Status */}
            <div className="flex items-center gap-1.5 bg-[#FFF8D6] px-3 py-1 rounded-full border border-brand-dark text-xs font-black">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>@acmetech</span>
              <span className="text-[10px] text-gray-500 hidden md:inline font-mono">Autopilot</span>
            </div>
          </div>

          {/* Center Navigation Dock (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white p-1.5 rounded-full border-2 border-brand-dark shadow-pop-sm">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onNavigate(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-brand-yellow-butter text-brand-dark' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Ask Manager Button */}
            <button
              onClick={() => onNavigate('manager')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#FCE7F3] text-pink-900 rounded-full border border-brand-dark text-xs font-black hover:bg-pink-200 transition-colors shadow-pop-sm"
            >
              <Bot className="w-3.5 h-3.5 text-pink-600" />
              <span>Ask AI</span>
            </button>

            {/* Notifications Bell */}
            <button
              onClick={onOpenNotifications}
              className="relative w-9 h-9 rounded-full bg-white text-brand-dark border-2 border-brand-dark flex items-center justify-center hover:bg-gray-100 btn-pop-sm"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white rounded-full text-[9px] font-black flex items-center justify-center border border-brand-dark">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1 pl-2 bg-white rounded-full border-2 border-brand-dark hover:bg-gray-50 btn-pop-sm"
              >
                <div className="w-7 h-7 rounded-full bg-brand-yellow-butter border border-brand-dark flex items-center justify-center text-xs font-black">
                  AC
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-600 mr-1" />
              </button>

              {/* Profile Menu Dropdown */}
              {showProfileMenu && (
                <>
                  <div 
                    onClick={() => setShowProfileMenu(false)} 
                    className="fixed inset-0 z-30" 
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-3xl border-2 border-brand-dark shadow-pop p-2 z-40 space-y-1 animate-in fade-in duration-150">
                    <div className="p-3 border-b border-gray-100">
                      <div className="font-obviously text-sm font-black uppercase">Arjun Chandra</div>
                      <div className="text-[11px] text-gray-500">aarjunchandra@gmail.com</div>
                    </div>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onOpenSettings();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-gray-100 text-left"
                    >
                      <Settings className="w-4 h-4 text-gray-600" />
                      <span>Settings & Brand</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onOpenFirstTimeSetup();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-gray-100 text-left"
                    >
                      <Sparkles className="w-4 h-4 text-brand-amber" />
                      <span>Setup Wizard</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onOpenHelp();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-gray-100 text-left"
                    >
                      <HelpCircle className="w-4 h-4 text-gray-600" />
                      <span>Help & Support</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onBackToLanding();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold uppercase rounded-xl hover:bg-yellow-100 text-brand-orange text-left"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Landing Page</span>
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
          2. MOBILE NAVIGATION BAR (STICKY BOTTOM DOCK)
      ────────────────────────────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-around bg-brand-dark text-white p-2 rounded-full border-2 border-brand-dark shadow-pop">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`p-2.5 rounded-full flex flex-col items-center relative ${
                isActive ? 'bg-[#FAED8F] text-brand-dark shadow-sm' : 'text-white/80 hover:text-white'
              }`}
              title={tab.label}
            >
              <Icon className="w-5 h-5" />
              {tab.badge && !isActive && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-pink-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN VIEW CONTENT AREA
      ────────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 pt-6">
        {children}
      </main>

    </div>
  );
}
