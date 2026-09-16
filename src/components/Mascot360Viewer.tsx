"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const frames = [
  "/mascot/0_front.png",
  "/mascot/1_three_quarter_right.jpeg",
  "/mascot/2_profile_right.png",
  "/mascot/3_back.png",
  "/mascot/4_profile_left.jpeg",
  "/mascot/5_three_quarter_left.png"
];

export default function Mascot360Viewer() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startIndex = useRef(0);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frames.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Auto rotate logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoRotating) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % frames.length);
      }, 500); // 3 seconds for 6 frames = 500ms per frame
    }
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handlePointerDown = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    setIsAutoRotating(false);
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    startIndex.current = currentFrame;
  };

  const handlePointerMove = useCallback((e: TouchEvent | MouseEvent) => {
    if (!isDragging.current) return;
    
    // prevent default scrolling when touching the mascot
    e.preventDefault();

    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX.current;
    
    // Sensitivity: changing frame every 30px
    const steps = Math.floor(diff / 30);
    
    if (Math.abs(steps) > 0) {
      let nextFrame = (startIndex.current - steps) % frames.length;
      if (nextFrame < 0) nextFrame += frames.length;
      setCurrentFrame(nextFrame);
    }
  }, []);

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handlePointerMove, { passive: false });
      el.addEventListener('touchmove', handlePointerMove, { passive: false });
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchend', handlePointerUp);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousemove', handlePointerMove);
        el.removeEventListener('touchmove', handlePointerMove);
      }
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [handlePointerMove]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto py-8">
      
      {/* Badge */}
      <div className="mb-4 inline-block bg-slate-900 border border-[#0055D4]/50 rounded-full px-4 py-1">
        <span className="text-xs sm:text-sm font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#FF7700] to-[#0055D4]">
          360° MASCOT VIEWER • CHARACTER CONSISTENCY
        </span>
      </div>

      {/* Viewer Container */}
      <div 
        ref={containerRef}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        className="relative w-full aspect-[9/16] rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden cursor-grab active:cursor-grabbing mb-6 group"
      >
        {/* Glow Pedestal */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-gradient-to-b from-[#0055D4]/40 to-transparent rounded-[100%] blur-xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-4 border border-[#0055D4]/50 bg-[#090d16]/80 rounded-[100%] shadow-[0_0_15px_rgba(0,85,212,0.8)] pointer-events-none" />

        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF7700]"></div>
          </div>
        )}

        {/* Mascot Frames */}
        {frames.map((src, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 flex justify-center items-center pb-8 transition-opacity duration-75 ${idx === currentFrame ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="relative w-full h-[85%]">
              <Image 
                src={src} 
                alt={`Mascot Frame ${idx}`}
                fill
                priority
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        ))}
        
        {/* Helper text overlay */}
        <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <span className="text-xs text-white/70 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
            Kéo chuột để xoay
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full bg-slate-900/80 rounded-2xl border border-slate-800 p-4 backdrop-blur-sm">
        
        <div className="flex items-center justify-between gap-4 mb-4">
          <button 
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`min-h-[44px] px-5 rounded-xl font-medium transition-all touch-manipulation flex items-center gap-2 ${
              isAutoRotating 
                ? 'bg-[#FF7700] text-white shadow-[0_0_15px_rgba(255,119,0,0.4)]' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            ⟳ Tự Động Xoay
          </button>

          <span className="text-sm font-semibold text-[#0055D4]">
            Góc: {currentFrame * 60}°
          </span>
        </div>

        {/* Range Slider */}
        <input 
          type="range" 
          min="0" 
          max="5" 
          step="1"
          value={currentFrame}
          onChange={(e) => {
            setIsAutoRotating(false);
            setCurrentFrame(parseInt(e.target.value));
          }}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#FF7700]"
        />
      </div>

      {/* Info Card */}
      <div className="mt-6 w-full text-center sm:text-left bg-gradient-to-r from-slate-900 to-slate-800/50 rounded-2xl border border-slate-800 p-5">
        <h4 className="text-[#FF7700] font-semibold mb-2">Đại Sứ Thương Hiệu Đồng Nhất</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          Sang Citizen sử dụng công nghệ Fine-Tuning AI độc quyền để tạo ra các Mascot có tính đồng nhất cao (Character Consistency) ở mọi góc nhìn, mọi biểu cảm. Tối ưu cho Video Marketing và Chatbot Avatar.
        </p>
      </div>

    </div>
  );
}
