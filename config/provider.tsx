"use client";

import { wagmiAdapter, projectId } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import {
  mainnet,
  arbitrum,
  monadTestnet,
  opBNB,
  zksync,
  polygon,
  base,
  linea,
  fantom,
  avalanche,
  optimism,
  moonriver,
  aurora,
  cronos,
  celo,
  telos,
  polygonZkEvm,
  bsc,
  mantle,
  manta,
  blast,
  mode,
  rootstock,
  sei,
} from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "BananaSwap",
  description: "BananaSwap",
  url: "https://bnnswap.com",
  icons: ["https://bnnswap.com/banana.png"],
};

// Create the modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [
    mainnet,
    arbitrum,
    monadTestnet,
    opBNB,
    zksync,
    polygon,
    base,
    linea,
    fantom,
    avalanche,
    optimism,
    moonriver,
    aurora,
    cronos,
    celo,
    telos,
    polygonZkEvm,
    bsc,
    mantle,
    manta,
    blast,
    mode,
    rootstock,
    sei,
  ],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies,
  );

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
