"use client";

import { useState, useEffect, useCallback } from "react";
import { getQuote, getSwapInfo, TokenInfo, SwapPath } from "../openocean";
import { formatUnits, parseUnits, type Address } from "viem";
import {
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import {
  getGasPrice,
  readContract,
  waitForTransactionReceipt,
} from "@wagmi/core";
import { wagmiConfig } from "@/config";
import { useAppKitNetwork } from "@reown/appkit/react";
import { useTokenList } from "./useTokenList";
import { isNativeToken } from "../utils";

const erc20Abi = [
  {
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const useSwap = () => {
  const { address: userAddress } = useAccount();
  const { chainId } = useAppKitNetwork();
  const { tokens } = useTokenList();
  const { writeContractAsync } = useWriteContract();

  const [fromToken, setFromToken] = useState<TokenInfo>();
  const [toToken, setToToken] = useState<TokenInfo>();
  const [fromAmount, setFromAmount] = useState<string>("1");
  const [toAmount, setToAmount] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalFor, setModalFor] = useState<"from" | "to">("from");
  const [loading, setLoading] = useState<boolean>(false);
  const [isApproving, setIsApproving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [swapPath, setSwapPath] = useState<SwapPath | null>(null);

  const [txHash, setTxHash] = useState<`0x${string}` | undefined>();
  const { isLoading: isTxLoading, isSuccess: isTxSuccess } =
    useWaitForTransactionReceipt({ hash: txHash });
  const { sendTransaction } = useSendTransaction();

  const fetchQuote = useCallback(async () => {
    if (
      !fromAmount ||
      !fromToken ||
      !toToken ||
      parseFloat(fromAmount) <= 0 ||
      !chainId
    ) {
      setToAmount("");
      setSwapPath(null);
      return;
    }

    setLoading(true);
    setError(null);
    setSwapPath(null);

    try {
      const gasPrice = await getGasPrice(wagmiConfig);

      const amount = parseUnits(fromAmount, fromToken.decimals).toString();
      const [quote, error] = await getQuote(+chainId, {
        inToken: fromToken.address,
        outToken: toToken.address,
        amount,
        gasPrice: gasPrice.toString(),
      });

      if (error) {
        setError(error);
        setToAmount("");
      } else if (quote) {
        setToAmount(formatUnits(BigInt(quote.outAmount), toToken.decimals));
        setSwapPath(quote.path);
      }
    } catch (e) {
      console.error(e);
      setError("Failed to fetch quote");
      setToAmount("");
    } finally {
      setLoading(false);
    }
  }, [fromAmount, fromToken, toToken, chainId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchQuote();
    }, 500); // Debounce input
    return () => clearTimeout(timer);
  }, [fetchQuote]);

  const handleOpenModal = (type: "from" | "to") => {
    setModalFor(type);
    setIsModalOpen(true);
  };

  const handleTokenSelect = (token: TokenInfo) => {
    if (modalFor === "from") {
      if (token.address === toToken?.address) {
        setToToken(fromToken);
      }
      setFromToken(token);
    } else {
      if (token.address === fromToken?.address) {
        setFromToken(toToken);
      }
      setToToken(token);
    }
    setIsModalOpen(false);
  };

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  };

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setFromAmount(value);
    }
  };

  const handleSwap = async () => {
    if (
      !fromAmount ||
      !fromToken ||
      !toToken ||
      parseFloat(fromAmount) <= 0 ||
      !userAddress ||
      !chainId
    ) {
      return;
    }

    setLoading(true);
    setError(null);
    setTxHash(undefined);

    try {
      const amount = parseUnits(fromAmount, fromToken.decimals);
      const gasPrice = await getGasPrice(wagmiConfig);
      const [swap, error] = await getSwapInfo(+chainId, {
        userAddress,
        inToken: fromToken.address,
        outToken: toToken.address,
        amount: amount.toString(),
        gasPrice: gasPrice.toString(),
        slippage: "0.5",
      });

      if (error) {
        setError(error);
        setLoading(false);
        return;
      }
      if (!swap) {
        setError("Could not get swap information.");
        setLoading(false);
        return;
      }

      if (!isNativeToken(fromToken.address, +chainId)) {
        const allowance = await readContract(wagmiConfig, {
          abi: erc20Abi,
          address: fromToken.address as `0x${string}`,
          functionName: "allowance",
          args: [userAddress, swap.to as `0x${string}`],
        });

        if (allowance < amount) {
          setIsApproving(true);
          setError("Approving token...");
          try {
            const approveHash = await writeContractAsync({
              abi: erc20Abi,
              address: fromToken.address as `0x${string}`,
              functionName: "approve",
              args: [swap.to as `0x${string}`, amount],
            });
            await waitForTransactionReceipt(wagmiConfig, {
              hash: approveHash,
            });
            setError(null);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (e: any) {
            setError(e.message);
            setLoading(false);
            setIsApproving(false);
            return;
          } finally {
            setIsApproving(false);
          }
        }
      }

      sendTransaction(
        {
          to: swap.to as Address,
          value: BigInt(swap.value),
          data: swap.data as `0x${string}`,
          gasPrice: BigInt(swap.gasPrice),
        },
        {
          onSuccess: (hash) => setTxHash(hash),
          onError: (e) => setError(e.message),
        },
      );
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setError((e as any)?.message || "Failed to perform swap");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFromAmount("1");
    setToAmount("");

    if (chainId && tokens.length > 0) {
      const nativeToken = tokens.find((token) =>
        isNativeToken(token.address, +chainId),
      );
      setFromToken(nativeToken);

      const usdtToken = tokens.find((token) => token.symbol === "USDT");
      if (usdtToken) {
        setToToken(usdtToken);
      } else {
        const usdcToken = tokens.find((token) => token.symbol === "USDC");
        setToToken(usdcToken);
      }
    } else {
      setFromToken(undefined);
      setToToken(undefined);
    }
  }, [chainId, tokens]);

  return {
    fromToken,
    toToken,
    fromAmount,
    toAmount,
    isModalOpen,
    modalFor,
    loading: loading || isTxLoading || isApproving,
    error,
    isTxSuccess,
    txHash,
    swapPath,
    tokens,
    handleOpenModal,
    handleTokenSelect,
    handleSwapTokens,
    handleFromAmountChange,
    handleSwap,
    setIsModalOpen,
    chainId,
  };
};

