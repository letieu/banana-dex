import axios from "axios";

const getUrl = (chainId: number, endpoint: string) => {
  return `https://open-api.openocean.finance/v4/${chainId}/${endpoint}`;
};

export const REFER_ADDRESS = "0x8fc0fd5AD6a540a8db86E8B22e4b7355005d57a8";
export const REFER_PERCENT = 3; // 3%

export type TokenInfo = {
  address: string;
  decimals: number;
  symbol: string;
  name: string;
  usd: string; // price in USD as a string
  volume: number;
  icon: string;
};

export type SwapPath = {
  from: string;
  to: string;
  parts: number;
  routes: unknown[]; // replace `any` with a more specific type if you know the route shape
};

export type QuoteInfo = {
  inToken: TokenInfo;
  outToken: TokenInfo;
  inAmount: string;
  outAmount: string;
  estimatedGas: string;
  path: SwapPath;
  exchange: string;
  save: number;
  price_impact: string;
};

export async function getQuote(
  chainId: number,
  input: {
    inToken: string;
    outToken: string;
    amount: string; // with decimals
    gasPrice: string; // with decimals
    slippage?: string; // 0.05 to 50
  },
): Promise<[QuoteInfo?, string?]> {
  const url = getUrl(chainId, "quote");
  const params = {
    inTokenAddress: input.inToken,
    outTokenAddress: input.outToken,
    amountDecimals: input.amount,
    gasPriceDecimals: input.gasPrice,
    referrerFee: REFER_PERCENT,
  };

  const { data } = await axios.get(url, { params });

  if (data.code !== 200) {
    return [undefined, data.error];
  }
  return [data.data];
}

export type SwapInfo = {
  inToken: TokenInfo;
  outToken: TokenInfo;
  inAmount: string;
  outAmount: string;
  estimatedGas: number;
  minOutAmount: string;
  from: string;
  to: string;
  value: string;
  gasPrice: string;
  chainId: number;
  rfqDeadline: number;
  gmxFee: number;
  blockNumber: number;
  price_impact: string;
  data: string;
};
export async function getSwapInfo(
  chainId: number,
  input: {
    userAddress: string;
    inToken: string;
    outToken: string;
    amount: string; // with decimals
    gasPrice: string; // with decimals
    slippage: string; // 0.05 to 50
  },
): Promise<[SwapInfo?, string?]> {
  const url = getUrl(chainId, "swap");
  const params = {
    account: input.userAddress,
    inTokenAddress: input.inToken,
    outTokenAddress: input.outToken,
    amountDecimals: input.amount,
    gasPriceDecimals: input.gasPrice,
    slippage: input.slippage,
    referrer: REFER_ADDRESS,
    referrerFee: REFER_PERCENT,
  };

  const { data } = await axios.get(url, { params });
  if (data.code !== 200) {
    return [undefined, data.error];
  }

  return [data.data];
}

export async function getListToken(
  chainId: number,
): Promise<[TokenInfo[], string?]> {
  const url = getUrl(chainId, "tokenList");

  const { data } = await axios.get(url);
  if (data.code !== 200) {
    return [[], data.error];
  }

  return [data.data];
}
