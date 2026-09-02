import React from 'react';
import { X, HelpCircle, MessageSquare, Mail, BookOpen, ExternalLink } from 'lucide-react';

export default function HelpSupportDrawer({ onClose, onAskManager }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      <div 
        onClick={onClose}
        className="flex-1 cursor-pointer"
      />

      <div className="w-full max-w-md bg-[#FFFDF7] h-full border-l-3 border-brand-dark shadow-pop p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        
        <div>
          <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-brand-dark/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#CFFAFE] border border-brand-dark flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-brand-dark" />
              </div>
              <h3 className="font-obviously text-xl font-black uppercase tracking-tight">
                HELP & SUPPORT
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Ask Manager Option */}
            <div className="bg-[#FFF8D6] p-5 rounded-3xl border-2 border-brand-dark shadow-pop-sm space-y-2">
              <div className="flex items-center gap-2 font-obviously text-sm font-black uppercase text-brand-dark">
                <MessageSquare className="w-4 h-4 text-brand-amber" />
                <span>Ask AI Manager Directly</span>
              </div>
              <p className="text-xs text-gray-700 font-semibold">
                Your manager can answer questions about scheduled posts, hooks, or system status instantly.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onAskManager("How do I connect my second Instagram account?");
                }}
                className="w-full py-2 bg-brand-dark text-white rounded-full font-black text-xs uppercase btn-pop-sm"
              >
                Chat with Manager
              </button>
            </div>

            {/* Common Questions */}
            <div className="space-y-2">
              <span className="text-[11px] font-black uppercase text-gray-500">Quick answers:</span>
              
              <div className="p-3.5 rounded-2xl bg-white border border-brand-dark/20 text-xs">
                <div className="font-bold text-brand-dark mb-1">How do approvals work?</div>
                <div className="text-gray-600">Whenever a new reel is synthesized, it appears in "Ready for Review". One tap approves it for the next optimal broadcast slot.</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-brand-dark/20 text-xs">
                <div className="font-bold text-brand-dark mb-1">Can I request script changes?</div>
                <div className="text-gray-600">Yes, simply click "Request Changes" on any reel and write a quick note like "Make hook sharper". The system delivers a revised cut.</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-brand-dark/20 text-xs">
                <div className="font-bold text-brand-dark mb-1">What if I want to post my own video?</div>
                <div className="text-gray-600">Use the Create Studio and attach your raw files or notes. VIRALYST will overlay dynamic captions and audio sync.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Human Support */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-600 font-bold">
            <span>Need human concierge?</span>
            <a href="mailto:support@viralyst.com" className="text-brand-orange hover:underline">
              support@viralyst.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
