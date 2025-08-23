"use client";
import { BananaIcon } from "./icons/BananaIcon";
import HeaderClient from "./HeaderClient";
import { useAppKit } from "@reown/appkit/react";

export default function Header() {
  const { open, close } = useAppKit();

  return (
    <HeaderClient>
      <div className="flex items-center space-x-2">
        <BananaIcon className="h-12 w-12 text-yellow-600" />
        <span className="text-xl font-bold tracking-wider text-white">
          BananaDEX
        </span>
      </div>
      <button
        className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
        onClick={() => open({ view: "Connect" })}
      >
        Connect Wallet
      </button>
    </HeaderClient>
  );
}
