import React, { useState } from 'react';
import { X, Send, Sparkles, AlertTriangle } from 'lucide-react';

export default function RequestChangesModal({ reel, onClose, onSubmitChange }) {
  const [changeNote, setChangeNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const presetReasons = [
    'The hook feels weak.',
    'Make this less salesy.',
    'I don’t like the captions.',
    'Shorten pacing to under 22 seconds.',
    'Focus more on engineering pain points.'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!changeNote.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitChange(reel.id, changeNote);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-white rounded-5xl border-3 border-brand-dark shadow-pop p-6 sm:p-8">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-yellow-butter border border-brand-dark flex items-center justify-center font-black text-xs">
              ✏️
            </div>
            <h3 className="font-obviously text-2xl uppercase font-black tracking-tight">
              REQUEST CHANGES
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-gray-600 font-semibold mb-4">
          Tell VIRALYST what needs adjustment on <span className="font-black text-brand-dark">"{reel.title}"</span>. We’ll generate a revised cut automatically.
        </p>

        {/* Preset quick suggestions */}
        <div className="space-y-1.5 mb-4">
          <span className="text-[10px] font-black uppercase text-gray-500">Quick suggestions:</span>
          <div className="flex flex-wrap gap-1.5">
            {presetReasons.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setChangeNote(preset)}
                className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF8D6] hover:bg-yellow-200 border border-brand-dark transition-colors text-left"
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
            className="w-full p-4 rounded-3xl border-2 border-brand-dark text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-amber bg-[#FFFDF7]"
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full font-bold text-xs uppercase text-gray-600 hover:text-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!changeNote.trim() || isSubmitting}
              className="px-6 py-2.5 bg-brand-dark text-white rounded-full font-black text-xs uppercase tracking-wider border-2 border-brand-dark btn-pop flex items-center gap-2 disabled:opacity-40"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>Submit Request</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
