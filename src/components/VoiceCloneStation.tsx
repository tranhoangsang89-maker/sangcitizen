"use client";

import React, { useState, useRef } from 'react';

const videos = [
  {
    id: 0,
    src: "/clone%20voice%201.mp4",
    title: "MC Ảo & Video Ads",
    subtitle: "Sagi - Studio Thương Mại"
  },
  {
    id: 1,
    src: "/clone%20voice%202.mp4",
    title: "Diễn Thuyết & Sự Kiện",
    subtitle: "Founder Sang - Sân Khấu Lớn"
  },
  {
    id: 2,
    src: "/clone%20voice%203.mp4",
    title: "Đối Thoại & Podcast",
    subtitle: "Duo Voice - Kể Chuyện Chiều Tà"
  }
];

export default function VoiceCloneStation() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (id: number) => {
    // Pause currently playing video if any
    if (playingId !== null && playingId !== id) {
      const prevVideo = videoRefs.current[playingId];
      if (prevVideo) {
        prevVideo.pause();
      }
    }

    const currentVideo = videoRefs.current[id];
    if (currentVideo) {
      if (playingId === id) {
        // Toggle pause if clicking the playing video
        currentVideo.pause();
        setPlayingId(null);
      } else {
        // Play new video
        currentVideo.muted = false; // Ensure unmute
        currentVideo.play().catch(e => console.error("Video play failed", e));
        setPlayingId(id);
      }
    }
  };

  const handleEnded = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4 items-start">
        {videos.map((video) => (
          <div 
            key={video.id}
            className="w-full flex flex-col"
          >
            <div 
              onClick={() => handlePlay(video.id)}
              className={`aspect-video w-full rounded-2xl overflow-hidden border bg-slate-900 relative cursor-pointer transition-all duration-300 ${
                playingId === video.id 
                  ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
                  : 'border-slate-800 shadow-xl hover:border-slate-600'
              }`}
            >
              <video
                ref={(el) => {
                  videoRefs.current[video.id] = el;
                }}
                src={video.src}
                preload="metadata"
                playsInline
                onEnded={() => handleEnded(video.id)}
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              {playingId !== video.id && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity hover:bg-black/30">
                  <div className="w-14 h-14 rounded-full bg-[#FF7700] text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,119,0,0.5)] transform hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Title & Subtitle */}
            <div className="mt-4 text-center md:text-left px-2">
              <h4 className="text-white font-bold text-base sm:text-lg">{video.title}</h4>
              <p className="text-[#0055D4] font-medium text-xs sm:text-sm mt-1">{video.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
