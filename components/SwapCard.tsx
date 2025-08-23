"use client";

import React, { useState, useEffect, useCallback } from "react";
import type { Token } from "../types";
import { TOKENS } from "../constants";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";
import TokenSelectorModal from "./TokenSelectorModal";

const SwapCard: React.FC = () => {
  const [fromToken, setFromToken] = useState<Token>(TOKENS[0]);
  const [toToken, setToToken] = useState<Token>(TOKENS[2]);
  const [fromAmount, setFromAmount] = useState<string>("1");
  const [toAmount, setToAmount] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalFor, setModalFor] = useState<"from" | "to">("from");

  const calculateToAmount = useCallback(() => {
    if (fromAmount && fromToken && toToken) {
      const amount = parseFloat(fromAmount);
      if (!isNaN(amount) && toToken.price > 0) {
        const valueInUsd = amount * fromToken.price;
        const calculatedToAmount = valueInUsd / toToken.price;
        setToAmount(calculatedToAmount.toFixed(6));
      } else {
        setToAmount("");
      }
    } else {
      setToAmount("");
    }
  }, [fromAmount, fromToken, toToken]);

  useEffect(() => {
    calculateToAmount();
  }, [calculateToAmount]);

  const handleOpenModal = (type: "from" | "to") => {
    setModalFor(type);
    setIsModalOpen(true);
  };

  const handleTokenSelect = (token: Token) => {
    if (modalFor === "from") {
      if (token.id === toToken.id) {
        setToToken(fromToken);
      }
      setFromToken(token);
    } else {
      if (token.id === fromToken.id) {
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

  return (
    <>
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-md rounded-3xl p-1 shadow-2xl transition-all duration-300">
        <div className="flex justify-end items-center">
        </div>

        <div className="relative">
          {/* From Input */}
          <div className="bg-slate-900/70 p-4 rounded-2xl mb-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-yellow-400">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-400">You Pay</span>
              <span className="text-sm text-gray-400">Balance: 0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                inputMode="decimal"
                value={fromAmount}
                onChange={handleFromAmountChange}
                placeholder="0.0"
                className="bg-transparent text-3xl font-mono text-white w-full focus:outline-none"
              />
              <button
                onClick={() => handleOpenModal("from")}
                className="flex items-center bg-slate-700 hover:bg-slate-600 transition-colors p-1 rounded-full min-w-[120px]"
              >
                <span className="w-7 h-7">{fromToken.icon}</span>
                <span className="mx-2 font-bold">{fromToken.symbol}</span>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Swap Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleSwapTokens}
              className="w-12 h-12 bg-slate-700 border-4 border-slate-800/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-slate-600 hover:rotate-180 transition-all duration-300"
            >
              <ArrowDownIcon className="w-6 h-6" />
            </button>
          </div>

          {/* To Input */}
          <div className="bg-slate-900/70 p-4 rounded-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-yellow-400">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-400">You Receive</span>
              <span className="text-sm text-gray-400">Balance: 0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                inputMode="decimal"
                value={toAmount}
                readOnly
                placeholder="0.0"
                className="bg-transparent text-3xl font-mono text-white w-full focus:outline-none"
              />
              <button
                onClick={() => handleOpenModal("to")}
                className="flex items-center bg-slate-700 hover:bg-slate-600 transition-colors p-1 rounded-full min-w-[120px]"
              >
                <span className="w-7 h-7">{toToken.icon}</span>
                <span className="mx-2 font-bold">{toToken.symbol}</span>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <button className="w-full bg-yellow-900/20 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold py-3 rounded-2xl text-xl transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 text-yellow-500">
            Swap
          </button>
        </div>
      </div>
      <TokenSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectToken={handleTokenSelect}
        tokens={TOKENS}
      />
    </>
  );
};

export default SwapCard;
