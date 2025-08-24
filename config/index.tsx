import { cookieStorage, createStorage } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  arbitrum,
  monadTestnet,
  aurora,
  avalanche,
  base,
  blast,
  bsc,
  celo,
  cronos,
  fantom,
  linea,
  manta,
  mantle,
  mode,
  moonriver,
  opBNB,
  optimism,
  polygon,
  polygonZkEvm,
  rootstock,
  sei,
  telos,
  zksync,
} from "@reown/appkit/networks";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [
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
];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;
