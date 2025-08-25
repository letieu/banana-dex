import React from "react";

const Hero: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BananaSwap",
    description:
      "The ultimate cross-chain decentralized exchange for swapping tokens across 40+ blockchains",
    url: "https://bananaswap.com",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Cross-chain token swapping",
      "Multi-blockchain support",
      "Best rate routing",
      "Non-custodial trading",
      "Real-time price updates",
    ],
    screenshot: "https://bananaswap.com/screenshot.png",
    softwareVersion: "1.0.0",
    author: {
      "@type": "Organization",
      name: "BananaSwap Team",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="text-center py-8 md:py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
          BananaSwap
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Find the best routes for lightning-fast trades on all your favorite
          networks.
        </p>
      </div>
    </>
  );
};

export default Hero;
