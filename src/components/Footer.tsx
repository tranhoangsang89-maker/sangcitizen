import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#090d16] px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Pre-Footer CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-orange-950/40 border border-slate-800 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl my-12">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#FF7700]/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#0055D4]/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Sẵn Sàng Tự Động Hóa Doanh Nghiệp Của Bạn Với AI?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Bàn giao sản phẩm thực chiến trong 3 - 7 ngày. Không phí duy trì hàng tháng.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://zalo.me/0888003205" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pr-8 pl-5 py-3 rounded-xl bg-gradient-to-r from-[#FF7700] to-[#ff9130] text-white font-bold shadow-[0_0_20px_rgba(255,119,0,0.3)] hover:scale-105 transition-transform"
              >
                <div className="bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
                  <img src="/images/zalo-icon.png" alt="Zalo" className="h-5 w-5 object-contain" />
                </div>
                Nhắn Zalo Sang Citizen (0888.003.205)
              </a>
              <a 
                href="#playground" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-slate-800 text-white font-semibold border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Trải Nghiệm AI Playground
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Footer */}
        <div className="border-t border-slate-800/80 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Col 1 */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="Sang Citizen Logo" 
                  className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(255,119,0,0.3)]"
                />
                <span className="font-bold text-xl tracking-tight text-white">Sang Citizen</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Human Strategy × AI Execution. Chuyên cung cấp giải pháp Web App, AI Chatbot và Mascot số cho doanh nghiệp hiện đại.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-900/50">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-500 text-xs font-medium tracking-wide">All Systems Operational</span>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white font-semibold mb-6">Giải Pháp</h4>
              <ul className="space-y-3">
                <li><a href="#pricing" className="text-slate-400 text-sm hover:text-white transition-colors">Web Báo Giá 3 Giây</a></li>
                <li><a href="#playground" className="text-slate-400 text-sm hover:text-white transition-colors">AI Chatbot 24/7</a></li>
                <li><a href="#playground" className="text-slate-400 text-sm hover:text-white transition-colors">Mascot & Video Ads</a></li>
                <li><a href="#case-studies" className="text-slate-400 text-sm hover:text-white transition-colors">App Trạm Sạc</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white font-semibold mb-6">Khám Phá</h4>
              <ul className="space-y-3">
                <li><a href="#playground" className="text-slate-400 text-sm hover:text-white transition-colors">AI Playground</a></li>
                <li><a href="#playground" className="text-slate-400 text-sm hover:text-white transition-colors">360° Mascot Viewer</a></li>
                <li><a href="#playground" className="text-slate-400 text-sm hover:text-white transition-colors">Video & Voice Studio</a></li>
                <li><a href="#pricing" className="text-slate-400 text-sm hover:text-white transition-colors">Bảng Giá 4 Gói</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-white font-semibold mb-6">Kênh Kết Nối</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <svg className="w-5 h-5 mt-0.5 text-[#0055D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Hotline/Zalo:<br/><a href="https://zalo.me/0888003205" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF7700] transition-colors font-medium">0888.003.205</a></span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <svg className="w-5 h-5 mt-0.5 text-[#FF7700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>YouTube:<br/><a href="https://youtube.com/@hoangsangtran1536" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF7700] transition-colors">@hoangsangtran1536</a></span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <svg className="w-5 h-5 mt-0.5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook:<br/><a href="https://www.facebook.com/sang.hoang.737448/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1877F2] transition-colors">Trần Hoàng Sang</a></span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <svg className="w-5 h-5 mt-0.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>TP. Mỹ Tho, Tiền Giang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-slate-800/80 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 pb-24 sm:pb-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sang Citizen. May đo tinh gọn - Hiệu quả tức thì.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/sang.hoang.737448/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#1877F2] transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://zalo.me/0888003205" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Zalo</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10.4 12c.5-1.2 1.4-1.8 2.8-1.8 1.6 0 2.5 1 2.5 2.5 0 1.5-1.1 2.6-2.6 2.6-.9 0-1.7-.5-2.1-1.3l-1.3.7c.6 1.1 1.7 1.8 3.1 1.8 2.2 0 4-1.6 4-4s-1.8-4-4-4c-1.8 0-3 1.1-3.6 2.4l1.2.7zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
            </a>
            <a href="https://youtube.com/@hoangsangtran1536" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.684 2.684 0 00-1.884-1.895C17.95 3.82 12 3.82 12 3.82s-5.95 0-7.698.471a2.684 2.684 0 00-1.884 1.895A28.214 28.214 0 002 12.005a28.214 28.214 0 00.418 5.82 2.684 2.684 0 001.884 1.894c1.748.47 7.698.47 7.698.47s5.95 0 7.698-.47a2.684 2.684 0 001.884-1.895A28.214 28.214 0 0022 12.005a28.214 28.214 0 00-.418-5.819zM9.996 15.42V8.588l6.51 3.416-6.51 3.416z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
