import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Playground from "@/components/Playground";
import Pricing from "@/components/Pricing";
import ShortsShowcase from "@/components/ShortsShowcase";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white selection:bg-[#FF7700]/30 selection:text-white">
      <Navbar />
      <Hero />
      <Playground />
      <Pricing />
      <ShortsShowcase />
      <CaseStudies />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
