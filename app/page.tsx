import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SwapCard from "@/components/SwapCard";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-900 text-white">
      {/* Background Gradient Aurora Effect (wrapped in clipped container) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-3000"></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-start p-4">
          <Hero />
          <SwapCard />
          <FeaturesGrid />
        </main>
        <Footer />
      </div>
    </div>
  );
}
