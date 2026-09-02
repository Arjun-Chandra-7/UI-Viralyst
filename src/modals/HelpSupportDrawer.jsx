import React from 'react';
import { X, HelpCircle, MessageSquare, Mail } from 'lucide-react';

export default function HelpSupportDrawer({ onClose, onAskManager }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#0D0C11]/60 backdrop-blur-sm">
      <div 
        onClick={onClose}
        className="flex-1 cursor-pointer"
      />

      <div className="w-full max-w-md bg-[#FAF7F2] h-full border-l-3 border-[#0D0C11] shadow-editorial-lg p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        
        <div>
          <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#0D0C11]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FAED8F] border border-[#0D0C11] flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-[#0D0C11]" />
              </div>
              <h3 className="font-obviously text-xl font-black uppercase tracking-tight text-[#0D0C11]">
                HELP & SUPPORT
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-[#0D0C11] flex items-center justify-center hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Ask Manager Option */}
            <div className="bg-white p-5 rounded-3xl border-2 border-[#0D0C11] shadow-editorial-sm space-y-2">
              <div className="flex items-center gap-2 font-obviously text-sm font-black uppercase text-[#0D0C11]">
                <MessageSquare className="w-4 h-4 text-[#FF5500]" />
                <span>Ask AI Manager Directly</span>
              </div>
              <p className="text-xs text-[#6B6875] font-semibold">
                Your manager has real-time access to the entire content pipeline and account metrics.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onAskManager("How does VIRALYST score viral hold rate?");
                }}
                className="w-full py-2.5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase btn-editorial-sm"
              >
                Summon Manager
              </button>
            </div>

            {/* Common Questions */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-black uppercase text-[#6B6875]">Quick answers:</span>
              
              <div className="p-3.5 rounded-2xl bg-white border border-[#0D0C11]/20 text-xs">
                <div className="font-bold text-[#0D0C11] mb-1">How do approvals work?</div>
                <div className="text-[#6B6875]">Whenever a new reel is synthesized, it appears in "Ready for Review". One tap approves it for the next optimal broadcast slot.</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#0D0C11]/20 text-xs">
                <div className="font-bold text-[#0D0C11] mb-1">Can I request script changes?</div>
                <div className="text-[#6B6875]">Yes, simply click "Request Changes" on any reel and write a note like "Make hook sharper". The system delivers a revised cut automatically.</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#0D0C11]/20 text-xs">
                <div className="font-bold text-[#0D0C11] mb-1">What if I want to post my own video?</div>
                <div className="text-[#6B6875]">Use the Create Studio and attach your raw files or notes. VIRALYST will overlay dynamic captions and audio sync.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Human Support */}
        <div className="pt-4 border-t border-[#0D0C11]/10">
          <div className="flex items-center justify-between text-xs text-[#6B6875] font-mono font-bold">
            <span>Human Concierge:</span>
            <a href="mailto:support@viralyst.com" className="text-[#FF5500] hover:underline">
              support@viralyst.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
