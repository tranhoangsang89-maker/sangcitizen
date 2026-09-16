"use client";

import React, { useState, useRef } from 'react';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden px-4">
      {/* Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0055D4]/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7700]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center">
        {/* Video Player */}
        <div className="w-full max-w-4xl aspect-video bg-slate-900/50 rounded-2xl md:rounded-3xl border border-slate-800 overflow-hidden shadow-2xl relative mb-12 sm:mb-16">
          <video 
            ref={videoRef}
            src="/intro-vid-480p.mp4" 
            poster="/video-poster.jpg"
            preload="metadata"
            autoPlay 
            loop 
            muted={isMuted} 
            playsInline 
            className="w-full h-full object-cover rounded-2xl relative z-10"
          />
          
          {/* Unmute/Mute Button */}
          <button 
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur min-h-[44px] w-[44px] rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-black/80 transition-colors touch-manipulation"
          >
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMuted ? (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.414-9.486a8 8 0 010 11.9M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                )}
             </svg>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 max-w-5xl w-full mb-6 tracking-tight leading-tight">
          Biến Website Của Bạn Thành <br className="hidden sm:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7700] to-[#0055D4]">Cỗ Máy Bán Hàng Tự Động Với AI</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Tự động hóa báo giá 3 giây, triển khai Chatbot CSKH 24/7 và sản xuất Đại sứ số AI độc quyền cho doanh nghiệp.
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center">
          <a href="#playground" className="min-h-[44px] sm:min-h-[52px] flex items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#FF7700] to-[#ff9130] text-white font-bold shadow-[0_0_25px_rgba(255,119,0,0.3)] hover:scale-105 transition-transform touch-manipulation w-full sm:w-auto text-base sm:text-lg">
            ⚡ Thử Nghiệm AI Playground
          </a>
          <a href="#pricing" className="min-h-[44px] sm:min-h-[52px] flex items-center justify-center px-8 rounded-full bg-slate-800 text-white font-semibold border border-slate-700 hover:bg-slate-700 transition-colors touch-manipulation w-full sm:w-auto text-base sm:text-lg">
            📋 Xem Bảng Giá
          </a>
        </div>
      </div>
    </section>
  );
}
