import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#090d16]/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/logo.png" 
            alt="Sang Citizen Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(255,119,0,0.3)]"
          />
          <span className="font-bold text-xl tracking-tight text-white hidden sm:block">Sang Citizen</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 bg-slate-800/40 border border-slate-700/50 rounded-full shadow-inner backdrop-blur-md">
          <a href="#playground" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 hover:shadow-sm rounded-full transition-all">Trải Nghiệm AI</a>
          <a href="#pricing" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 hover:shadow-sm rounded-full transition-all">Bảng Giá</a>
          <a href="#case-studies" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 hover:shadow-sm rounded-full transition-all">Case Studies</a>
        </nav>

        {/* CTA */}
        <Link 
          href="https://zalo.me/0888003205" 
          target="_blank"
          className="h-[44px] inline-flex items-center justify-center gap-2 pl-1 pr-5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-[0_0_15px_rgba(255,119,0,0.3)] hover:scale-105 transition-all touch-manipulation"
        >
          <div className="bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
            <img src="/images/zalo-icon.png" alt="Zalo" className="h-6 w-6 object-contain" />
          </div>
          <span className="hidden sm:block">Zalo Tư Vấn</span>
        </Link>
      </div>
    </header>
  );
}
