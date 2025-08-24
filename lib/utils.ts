import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CHAIN_NATIVE_TOKEN } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNativeToken(address: string, chainId: number) {
  const nativeAddress = CHAIN_NATIVE_TOKEN[chainId];
  return nativeAddress === address;
}
