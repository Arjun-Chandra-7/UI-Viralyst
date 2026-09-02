import React, { useState } from 'react';
import { X, User, Building, Sliders, Share2, Bell, Users, CheckCircle2 } from 'lucide-react';

export default function SettingsModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('account');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Settings State
  const [name, setName] = useState('Arjun Chandra');
  const [email, setEmail] = useState('aarjunchandra@gmail.com');
  const [companyName, setCompanyName] = useState('Acme Tech');
  const [website, setWebsite] = useState('https://acme.tech');
  const [instagramAccount, setInstagramAccount] = useState('@acmetech');
  const [topicsToFocus, setTopicsToFocus] = useState('Productivity tools, context switching, async engineering');
  const [topicsToAvoid, setTopicsToAvoid] = useState('Crypto, sensationalism, generic motivation');
  const [tone, setTone] = useState('Educated & Direct (No Fluff)');
  const [autoApprove, setAutoApprove] = useState(false);
  const [notificationsReady, setNotificationsReady] = useState(true);
  const [notificationsReport, setNotificationsReport] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const navItems = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'brand', label: 'Brand & Profile', icon: Building },
    { id: 'preferences', label: 'Content Preferences', icon: Sliders },
    { id: 'publishing', label: 'Publishing', icon: Share2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'team', label: 'Team & Roles', icon: Users },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0C11]/75 backdrop-blur-md p-4">
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-6xl border-3 border-[#0D0C11] shadow-editorial-lg overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Top Bar */}
        <div className="p-6 bg-white border-b-2 border-[#0D0C11] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FAED8F] border border-[#0D0C11] flex items-center justify-center text-xs font-black">
              ⚙
            </div>
            <h3 className="font-obviously text-2xl uppercase font-black tracking-tight text-[#0D0C11]">
              SETTINGS
            </h3>
            <span className="text-[9px] font-mono uppercase font-black text-[#6B6875] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#0D0C11]">
              Calm & Disciplined
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white text-[#0D0C11] border-2 border-[#0D0C11] flex items-center justify-center btn-editorial-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Sidebar */}
          <div className="md:col-span-4 bg-[#FAF7F2] p-4 border-b md:border-b-0 md:border-r-2 border-[#0D0C11]/10 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs font-mono font-black uppercase tracking-wider text-left transition-colors ${
                    isActive
                      ? 'bg-[#0D0C11] text-white shadow-editorial-sm'
                      : 'text-[#2A2930] hover:bg-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Panel */}
          <div className="md:col-span-8 p-6 sm:p-8 space-y-6 bg-white">
            
            {savedSuccess && (
              <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl border border-emerald-400 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Settings locked & saved successfully!</span>
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4">
              
              {/* Account */}
              {activeTab === 'account' && (
                <div className="space-y-4">
                  <h4 className="font-obviously text-lg font-black uppercase mb-3">Account Credentials</h4>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Change Password</label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                </div>
              )}

              {/* Brand & Profile */}
              {activeTab === 'brand' && (
                <div className="space-y-4">
                  <h4 className="font-obviously text-lg font-black uppercase mb-3">Brand Identity</h4>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Website</label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Instagram Account Handle</label>
                    <input
                      type="text"
                      value={instagramAccount}
                      onChange={(e) => setInstagramAccount(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                </div>
              )}

              {/* Content Preferences */}
              {activeTab === 'preferences' && (
                <div className="space-y-4">
                  <h4 className="font-obviously text-lg font-black uppercase mb-3">Content Guardrails</h4>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Topics to Focus On</label>
                    <input
                      type="text"
                      value={topicsToFocus}
                      onChange={(e) => setTopicsToFocus(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Topics to Avoid</label>
                    <input
                      type="text"
                      value={topicsToAvoid}
                      onChange={(e) => setTopicsToAvoid(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-[#6B6875] mb-1">Editorial Tone</label>
                    <input
                      type="text"
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border-2 border-[#0D0C11] font-bold text-sm bg-[#FAF7F2]"
                    />
                  </div>
                </div>
              )}

              {/* Publishing */}
              {activeTab === 'publishing' && (
                <div className="space-y-4">
                  <h4 className="font-obviously text-lg font-black uppercase mb-3">Publishing Stream</h4>
                  <div className="p-4 rounded-2xl border-2 border-[#0D0C11] bg-[#FAF7F2] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase text-[#6B6875]">Connected Account</div>
                      <div className="text-sm font-black font-mono text-[#0D0C11]">{instagramAccount}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-black uppercase border border-emerald-400">
                      LIVE
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="autoApprove"
                      checked={autoApprove}
                      onChange={(e) => setAutoApprove(e.target.checked)}
                      className="w-4 h-4 rounded border-[#0D0C11] text-[#0D0C11]"
                    />
                    <label htmlFor="autoApprove" className="text-xs font-semibold text-[#2A2930]">
                      Auto-publish scheduled reels once approved by client
                    </label>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === 'notifications' && (
                <div className="space-y-3">
                  <h4 className="font-obviously text-lg font-black uppercase mb-3">Alert Preferences</h4>
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#0D0C11]/20">
                    <span className="text-xs font-bold text-[#0D0C11]">Email when reel is ready for client review</span>
                    <input
                      type="checkbox"
                      checked={notificationsReady}
                      onChange={(e) => setNotificationsReady(e.target.checked)}
                      className="w-4 h-4 text-[#0D0C11]"
                    />
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#0D0C11]/20">
                    <span className="text-xs font-bold text-[#0D0C11]">Weekly performance momentum summary</span>
                    <input
                      type="checkbox"
                      checked={notificationsReport}
                      onChange={(e) => setNotificationsReport(e.target.checked)}
                      className="w-4 h-4 text-[#0D0C11]"
                    />
                  </div>
                </div>
              )}

              {/* Team */}
              {activeTab === 'team' && (
                <div className="space-y-3">
                  <h4 className="font-obviously text-lg font-black uppercase mb-3">Team Collaborators</h4>
                  <div className="p-4 rounded-2xl border-2 border-[#0D0C11] bg-[#FAF7F2] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black font-obviously uppercase">Arjun Chandra (You)</div>
                      <div className="text-[11px] font-mono text-[#6B6875]">Owner • Executive Admin</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white px-2 py-1 rounded-full border border-[#0D0C11]">
                      PRIMARY
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert("Enterprise collaborator seats active")}
                    className="w-full py-2.5 bg-white text-[#0D0C11] rounded-full font-black text-xs uppercase border-2 border-[#0D0C11] btn-editorial-sm"
                  >
                    + Invite Team Member
                  </button>
                </div>
              )}

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial"
                >
                  Save Settings
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}
