import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sang Citizen | Human Strategy × AI Execution",
  description: "Cung cấp giải pháp Web App, AI Chatbot và Mascot số thông minh giúp doanh nghiệp tự động hóa vận hành và bứt phá doanh thu.",
  openGraph: {
    title: "Sang Citizen | Giải Pháp AI Thực Chiến",
    description: "Giải pháp Web App, AI Chatbot và Mascot số cho doanh nghiệp hiện đại.",
    siteName: "Sang Citizen",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sang Citizen Open Graph Image",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sang Citizen | Giải Pháp AI Thực Chiến",
    description: "Giải pháp Web App, AI Chatbot và Mascot số cho doanh nghiệp hiện đại.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
