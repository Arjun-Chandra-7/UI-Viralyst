import React from 'react';
import { X, Bell, CheckCircle2, AlertCircle, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { NOTIFICATIONS_DATA } from '../data/mockData';

export default function NotificationsDrawer({ onClose, onNavigate }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      <div 
        onClick={onClose}
        className="flex-1 cursor-pointer"
      />

      <div className="w-full max-w-md bg-[#FFFDF7] h-full border-l-3 border-brand-dark shadow-pop p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-brand-dark/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-yellow-butter border border-brand-dark flex items-center justify-center">
                <Bell className="w-4 h-4 text-brand-dark" />
              </div>
              <h3 className="font-obviously text-xl font-black uppercase tracking-tight">
                NOTIFICATIONS
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Only what matters • No technical noise
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
                className={`p-4 rounded-3xl border-2 border-brand-dark cursor-pointer transition-transform hover:-translate-y-0.5 ${
                  item.unread ? 'bg-[#FFF8D6] shadow-pop-sm' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-obviously text-sm font-black uppercase text-brand-dark">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500">{item.time}</span>
                </div>

                <p className="text-xs text-gray-700 font-medium leading-snug mb-2">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between text-[10px] font-bold text-brand-orange uppercase pt-1 border-t border-brand-dark/10">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-200 text-center text-xs text-gray-500 font-semibold">
          All notifications delivered directly without technical jargon.
        </div>

      </div>
    </div>
  );
}
