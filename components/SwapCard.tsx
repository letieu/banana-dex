"use client";

import React from "react";
import TokenSelectorModal from "./TokenSelectorModal";
import TokenInput from "./TokenInput";
import SwapDirectionButton from "./SwapDirectionButton";
import { useSwap } from "../lib/hooks/useSwap";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import SwapRoute from "./SwapRoute";

const SwapCard: React.FC = () => {
  const {
    fromToken,
    toToken,
    fromAmount,
    toAmount,
    isModalOpen,
    loading,
    error,
    swapPath,
    tokens,
    addToken,
    handleOpenModal,
    handleTokenSelect,
    handleSwapTokens,
    handleFromAmountChange,
    handleSwap,
    setIsModalOpen,
  } = useSwap();

  const { isConnected } = useAppKitAccount();
  const { open } = useAppKit();

  return (
    <>
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-md rounded-3xl p-1 shadow-2xl transition-all duration-300">
        <div className="flex justify-end items-center"></div>

        <div className="relative">
          <TokenInput
            label="You Pay"
            amount={fromAmount}
            token={fromToken}
            onAmountChange={handleFromAmountChange}
            onTokenSelect={() => handleOpenModal("from")}
            className="mb-2"
          />

          <SwapDirectionButton onClick={handleSwapTokens} />

          <TokenInput
            label="You Receive"
            amount={toAmount}
            token={toToken}
            onTokenSelect={() => handleOpenModal("to")}
            isReadOnly
          />
        </div>

        {error && <p className="text-red-500 text-center mt-2 w-full max-h-[20any0px] overflow-scroll">{error}</p>}

        <SwapRoute path={swapPath} fromToken={fromToken} toToken={toToken} tokens={tokens} />

        <div className="mt-2">
          <button
            onClick={() => (isConnected ? handleSwap() : open())}
            disabled={loading}
            className="w-full bg-yellow-900/20 hover:bg-yellow-900/40 font-semibold py-3 rounded-2xl text-xl transition-all duration-300 shadow-md text-yellow-500 disabled:bg-slate-700 disabled:text-gray-500"
          >
            {loading ? "Loading..." : "Swap"}
          </button>
        </div>
      </div>
      <TokenSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectToken={handleTokenSelect}
        tokens={tokens}
        loading={!tokens.length}
        addToken={addToken}
      />
    </>
  );
};

export default SwapCard;

