
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center py-12 md:py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
        BananaDEX
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
        The Sweetest Swaps in DeFi. Lightning-fast, secure, and low-fee token swaps.
      </p>
    </div>
  );
};

export default Hero;
