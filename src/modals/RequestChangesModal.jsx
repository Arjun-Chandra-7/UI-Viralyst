import React, { useState } from 'react';
import { X, Send, Sparkles, Edit3 } from 'lucide-react';

export default function RequestChangesModal({ reel, onClose, onSubmitChange }) {
  const [changeNote, setChangeNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const presetReasons = [
    'The hook feels weak. Make it punchier in 3 seconds.',
    'Make this less salesy. Lead with raw educational value.',
    'I don’t like the caption pacing. Tighten text.',
    'Shorten video pacing to under 22 seconds.',
    'Focus more on engineering context-switching cost.'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!changeNote.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitChange(reel.id, changeNote);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0C11]/75 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-5xl border-3 border-[#0D0C11] shadow-editorial-lg p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#0D0C11]/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FAED8F] border border-[#0D0C11] flex items-center justify-center font-black text-xs">
              <Edit3 className="w-4 h-4 text-[#0D0C11]" />
            </div>
            <h3 className="font-obviously text-xl font-black uppercase tracking-tight text-[#0D0C11]">
              REQUEST HOOK REVISION
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#0D0C11] flex items-center justify-center hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs font-semibold text-[#6B6875] mb-4">
          Instruct VIRALYST what needs adjustment on <span className="font-black text-[#0D0C11]">"{reel.title}"</span>. The system delivers an updated cut automatically.
        </p>

        {/* Quick preset suggestions */}
        <div className="space-y-1.5 mb-4">
          <span className="text-[10px] font-mono font-black uppercase text-[#6B6875]">Quick suggestions:</span>
          <div className="flex flex-wrap gap-1.5">
            {presetReasons.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setChangeNote(preset)}
                className="px-3 py-1 rounded-full text-[11px] font-bold bg-white hover:bg-[#FAED8F] border border-[#0D0C11] transition-colors text-left shadow-editorial-sm"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows={4}
            value={changeNote}
            onChange={(e) => setChangeNote(e.target.value)}
            placeholder="e.g. The hook feels weak. Make it more accusatory and cut the first 3 seconds..."
            className="w-full p-4 rounded-3xl border-2 border-[#0D0C11] text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#FF9E00] bg-white text-[#0D0C11]"
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase text-[#6B6875] hover:text-[#0D0C11]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!changeNote.trim() || isSubmitting}
              className="px-6 py-2.5 bg-[#0D0C11] text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-[#0D0C11] btn-editorial flex items-center gap-2 disabled:opacity-40"
            >
              {isSubmitting ? (
                <span>Submitting Revision...</span>
              ) : (
                <>
                  <span>Submit Revision</span>
                  <Send className="w-3.5 h-3.5 text-[#FAED8F]" />
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
