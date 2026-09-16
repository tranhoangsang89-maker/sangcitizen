"use client";

import React, { useState } from 'react';

const shortsData = [
  {
    id: "hlNI15AbIEU",
    title: "Ai bảo nhân vật AI chỉ là ảnh tĩnh vô hồn?",
    badge: "🔥 1.0K+ Views",
    url: "https://www.youtube.com/shorts/hlNI15AbIEU"
  },
  {
    id: "NM8x1FBkJZQ",
    title: "Mascot AI Bắn 3 Thứ Tiếng, Cân Mọi Ngành",
    badge: "⚡ Đa Ngôn Ngữ",
    url: "https://www.youtube.com/shorts/NM8x1FBkJZQ"
  },
  {
    id: "M1lM7QgagzY",
    title: "Trả lời chậm 2 phút = Mất khách? Cứu cánh AI",
    badge: "🤖 Chatbot 24/7",
    url: "https://www.youtube.com/shorts/M1lM7QgagzY"
  },
  {
    id: "IMt2P6MXebU",
    title: "Trợ lý ảo AI được tạo ra như thế nào?",
    badge: "✨ Viral",
    url: "https://www.youtube.com/shorts/IMt2P6MXebU"
  },
  {
    id: "kxgDDzWdrTQ",
    title: "Không Cần Thuê Mẫu, Đã Có AI Lo",
    badge: "💡 Nổi Bật",
    url: "https://www.youtube.com/shorts/kxgDDzWdrTQ"
  }
];

export default function ShortsShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 w-full bg-[#090d16] border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#FF7700]/10 border border-[#FF7700]/30 text-[#FF7700] text-sm font-bold mb-4">
            NỘI DUNG SỐ THỰC CHIẾN
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">🎬 Góc Video Shorts Sang Citizen</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Khám phá các case study và giải pháp AI qua các video ngắn trực quan trên kênh YouTube.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-5">
          {shortsData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveVideo(item.id)}
              className="aspect-[9/16] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 relative group cursor-pointer shadow-xl hover:border-orange-500/70 transition-all"
            >
              <img 
                src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded-md text-xs font-semibold text-white border border-white/10">
                  {item.badge}
                </span>
                <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center shadow-lg">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              {/* Bottom Gradient & Title */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-12 z-10">
                <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-2 leading-snug">
                  {item.title}
                </h3>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center z-10">
                 <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#FF7700] transition-all">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
          <div 
            className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0 z-10"
              title="YouTube Shorts"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
