import React from 'react';

export default function CaseStudies() {
  const cases = [
    {
      title: "Hệ sinh thái 8 Web App",
      client: "Solar 24h",
      desc: "Số hóa toàn diện hệ thống quản lý, báo giá và tương tác khách hàng năng lượng mặt trời.",
      img: "/images/case-solar24h.jpeg",
      link: "https://cty-solar24h.tranhoangsang89.workers.dev/",
      linkText: "🔗 Xem Hệ Sinh Thái Live"
    },
    {
      title: "Web App sạc tích điểm",
      client: "Chợ Gạo - VinFast (Case Chú Trượng)",
      desc: "Giải pháp trạm sạc điện thông minh kết hợp loyalty program tối ưu trải nghiệm người dùng.",
      img: "/images/case-tramsac.jpeg",
      link: "https://tramsac-thanh-nhan.vercel.app/",
      linkText: "⚡ Trải Nghiệm App Trạm Sạc"
    },
    {
      title: "Đại sứ thương hiệu số AI",
      client: "Sagi Mascot",
      desc: "Nhân vật đại diện đa ngôn ngữ, tương tác 24/7 giúp gia tăng tỷ lệ chuyển đổi khách hàng.",
      img: "/images/case-sagi.jpg",
      link: "https://sagi-ai.vercel.app/",
      linkText: "🤖 Trò Chuyện Cùng Sagi"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-4 w-full bg-slate-900/30 border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Thư Viện Thực Chiến</h2>
          <p className="text-slate-400">Những dự án tiêu biểu chúng tôi đã triển khai thành công.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="group hover:border-slate-700 shadow-xl overflow-hidden rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between transition-colors">
              <div>
                <div className="aspect-video relative overflow-hidden bg-slate-950">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 pb-2">
                  <p className="text-[#0055D4] font-semibold text-sm mb-1">{item.client}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-4">
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700/80 transition-all flex items-center justify-center gap-2"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
