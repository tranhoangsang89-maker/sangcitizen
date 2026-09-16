import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      desc: "Landing Page Khởi Nghiệp",
      price: "1.800.000đ",
      features: [
        "01 Trang Landing Page giới thiệu chuyên nghiệp",
        "Chuẩn Responsive Mobile-First",
        "Tích hợp nút gọi Hotline & Zalo 1-chạm",
        "Tối ưu tốc độ tải trang siêu nhanh",
        "Bàn giao thần tốc 2 - 3 ngày"
      ],
      popular: false,
      cta: "Chọn Gói Basic"
    },
    {
      name: "Starter",
      desc: "Web Tinh Gọn",
      price: "3.800.000đ",
      features: [
        "Báo giá PDF 3 giây",
        "Bàn giao 3-5 ngày",
        "Giao diện chuẩn Mobile-First",
        "Tối ưu SEO cơ bản"
      ],
      popular: false,
      cta: "Chọn Gói Starter"
    },
    {
      name: "Pro",
      desc: "Web App + AI Chatbot 24/7",
      price: "6.500.000đ",
      features: [
        "Mọi tính năng gói Starter",
        "Tích hợp AI Chatbot CSKH 24/7",
        "Hệ thống quản trị nội dung (CMS)",
        "Bảo mật SSL & Tối ưu tốc độ cao"
      ],
      popular: true,
      cta: "Chọn Gói Pro",
      highlight: true
    },
    {
      name: "Enterprise",
      desc: "All-in-One Hệ Thống + Mascot AI",
      price: "12.000.000đ+",
      features: [
        "Mọi tính năng gói Pro",
        "Đại sứ thương hiệu số AI (Mascot)",
        "Voice Clone độc quyền",
        "Hỗ trợ kỹ thuật 24/7 trọn đời"
      ],
      popular: false,
      cta: "Nhận Báo Giá Enterprise"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Bảng Giá Minh Bạch</h2>
          <p className="text-slate-400">Chi trả 1 lần, không phí duy trì hàng tháng. Đầu tư xứng đáng cho hệ thống của bạn.</p>
        </div>

        {/* CSS Grid for Desktop, Single Column / Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* We change order on mobile so Pro is first using flex order or just standard rendering. 
              To keep it simple and accessible, we render them in order, but on mobile we could use CSS flex to reorder if needed. 
              Here we just use order-1, order-2 for mobile if we want Pro on top. */}
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col bg-slate-900/80 backdrop-blur rounded-3xl border ${
                plan.highlight ? 'border-[#0055D4] shadow-[0_0_30px_rgba(0,85,212,0.2)] md:-translate-y-4 relative' : 'border-slate-800'
              } p-8 ${
                // Optional mobile reordering: make highlighted plan appear first on small screens
                plan.highlight ? 'order-first md:order-none' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF7700] to-[#0055D4] text-white whitespace-nowrap px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Khuyên Dùng
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.desc}</p>
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {plan.price}
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-[#FF7700] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://zalo.me/0888003205"
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[48px] w-full rounded-xl font-semibold transition-all touch-manipulation flex items-center justify-center ${
                  plan.highlight 
                    ? 'bg-[#0055D4] text-white hover:bg-[#0044aa]' 
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
