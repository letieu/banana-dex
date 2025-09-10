import React from "react";
import { BananaIcon } from "./icons/BananaIcon";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900/50 border-t border-white/10 mt-16 backdrop-blur-lg">
      <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3">
              <BananaIcon className="h-8 w-8 text-yellow-300" />
              <span className="text-xl font-bold tracking-wider text-white">
                Banana Swap
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              The sweetest and most secure place to swap your favorite crypto
              assets like Ethereum (ETH), USDT, USDC, ...
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-400 hover:text-white"
                >
                  Swap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Community
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-400 hover:text-white"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Banana Swap. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
