"use client";
import {
  AppKitNetworkButton,
  useAppKit,
  useAppKitAccount,
} from "@reown/appkit/react";
import { normalize } from "viem/ens";

function shortenAddress(address: string, chars = 4) {
  if (!address) return "";
  return `${address.slice(0, 2 + chars)}...${address.slice(-chars)}`;
}

export default function ConnectButton() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  if (!isConnected || !address) {
    return (
      <div className="flex items-center gap-2">
        <AppKitNetworkButton />
        <button
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
          onClick={() => open({ view: "Connect" })}
        >
          <span className="hidden sm:inline">Connect Wallet</span>
          <span className="sm:hidden">Connect</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <AppKitNetworkButton />
      <button
        onClick={() => open()}
        className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
      >
        {shortenAddress(address)}
      </button>
    </div>
  );
}
