import React from "react";

const Header: React.FC = () => {
  return (
    <header className="px-4 sm:px-8 py-4">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-lg">
        <div className="flex items-center space-x-3 pl-4">
          <div className="text-yellow-300 text-3xl">🍌</div>
          <span className="text-xl font-bold tracking-wider text-white">
            Banana DEX
          </span>
        </div>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-400/30">
          Connect Wallet
        </button>
      </nav>
    </header>
  );
};

export default Header;
