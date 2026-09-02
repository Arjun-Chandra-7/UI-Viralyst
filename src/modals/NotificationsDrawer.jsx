import React from 'react';
import { X, Bell, ArrowRight } from 'lucide-react';
import { NOTIFICATIONS_DATA } from '../data/mockData';

export default function NotificationsDrawer({ onClose, onNavigate }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#0D0C11]/60 backdrop-blur-sm">
      <div 
        onClick={onClose}
        className="flex-1 cursor-pointer"
      />

      <div className="w-full max-w-md bg-[#FAF7F2] h-full border-l-3 border-[#0D0C11] shadow-editorial-lg p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#0D0C11]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FAED8F] border border-[#0D0C11] flex items-center justify-center">
                <Bell className="w-4 h-4 text-[#0D0C11]" />
              </div>
              <h3 className="font-obviously text-xl font-black uppercase tracking-tight text-[#0D0C11]">
                NOTIFICATIONS
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-[#0D0C11] flex items-center justify-center hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[10px] font-mono font-bold text-[#6B6875] uppercase tracking-wider mb-6">
            HUMAN-READABLE ALERTS • ZERO SYSTEM JARGON
          </p>

          {/* Notifications List */}
          <div className="space-y-3">
            {NOTIFICATIONS_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onClose();
                  onNavigate(item.actionView);
                }}
                className={`p-4 rounded-3xl border-2 border-[#0D0C11] cursor-pointer transition-transform hover:-translate-y-0.5 ${
                  item.unread ? 'bg-white shadow-editorial-sm' : 'bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-obviously text-sm font-black uppercase text-[#0D0C11]">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#6B6875]">{item.time}</span>
                </div>

                <p className="text-xs text-[#2A2930] font-semibold leading-snug mb-2">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#FF5500] uppercase pt-1 border-t border-[#0D0C11]/10">
                  <span>Take Action</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#0D0C11]/10 text-center text-[10px] font-mono text-[#6B6875]">
          Delivered in real-time as content moves through orbit.
        </div>

      </div>
    </div>
  );
}
