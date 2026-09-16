import React from 'react';
import Link from 'next/link';

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-3 pb-safe flex gap-2">
      <a 
        href="#playground"
        className="flex-1 min-h-[44px] bg-slate-800 hover:bg-slate-700 text-white rounded-xl flex items-center justify-center font-semibold text-sm border border-slate-700 transition-colors touch-manipulation"
      >
        ⚡ Thử AI Ngay
      </a>
      
      <Link 
        href="https://zalo.me/0888003205"
        target="_blank"
        className="flex-1 min-h-[44px] bg-[#0068FF] hover:bg-[#0055D4] text-white rounded-xl flex items-center justify-center font-semibold text-sm shadow-[0_0_15px_rgba(0,104,255,0.4)] transition-colors touch-manipulation gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          {/* Simple Zalo-like icon or generic chat icon */}
          <path d="M12 2C6.477 2 2 6.046 2 11.042c0 2.84 1.503 5.371 3.826 7.022.062 1.092-.562 3.328-.582 3.4-.047.165.048.336.216.38a.382.382 0 0 0 .108.016c.148 0 .28-.088.342-.224.28-1.579 1.942-2.918 2.37-3.13 1.134.316 2.38.483 3.693.483 5.523 0 10-4.043 10-9.043C22 6.046 17.523 2 12 2z"/>
        </svg>
        Nhắn Sang Citizen
      </Link>
    </div>
  );
}
