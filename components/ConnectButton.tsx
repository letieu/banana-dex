"use client";
import {
  AppKitAccountButton,
  AppKitNetworkButton,
  useAppKit,
  useAppKitAccount,
} from "@reown/appkit/react";

export default function ConnectButton() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  if (!isConnected || !address) {
    return (
      <div className="flex items-center gap-2">
        <AppKitNetworkButton />
        <button
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
          onClick={() => open({ view: "Connect" })}
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <AppKitNetworkButton />
      <AppKitAccountButton />
    </div>
  );
}
