import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SwapCard from "@/components/SwapCard";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-state-700 text-white">
      {/* Grid Background */}

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
