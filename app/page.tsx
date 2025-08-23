import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SwapCard from "@/components/SwapCard";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-900 text-white">
      {/* Grid Background */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
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
