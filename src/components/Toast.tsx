import React from 'react';
import { CheckCircle, Copy } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 border border-blue-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl shadow-blue-500/20 backdrop-blur-md animate-bounce">
      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
        <CheckCircle className="w-4 h-4 text-blue-400" />
      </div>
      <div>
        <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider flex items-center gap-1">
          <Copy className="w-3 h-3" /> Copied to Clipboard
        </p>
        <p className="text-sm font-mono text-slate-200 truncate max-w-xs">{message}</p>
      </div>
    </div>
  );
};
