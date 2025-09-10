import React from "react";
import { TokenInfo } from "@/lib/openocean";
import Image from "next/image";
import { stringToColor } from "@/lib/utils";

interface TokenInputProps {
  label: string;
  amount: string;
  token?: TokenInfo;
  onAmountChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTokenSelect: () => void;
  isReadOnly?: boolean;
  className?: string;
}

const TokenInput: React.FC<TokenInputProps> = ({
  label,
  amount,
  token,
  onAmountChange,
  onTokenSelect,
  isReadOnly = false,
  className = "",
}) => {
  return (
    <div
      className={`bg-slate-900/70 p-4 rounded-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-yellow-400 ${className}`}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-400">{label}</span>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          inputMode="decimal"
          value={amount}
          onChange={onAmountChange}
          readOnly={isReadOnly}
          placeholder="0.0"
          className="bg-transparent text-3xl font-mono text-white w-full focus:outline-none"
        />
        <button
          onClick={onTokenSelect}
          className="flex items-center bg-slate-700 hover:bg-slate-600 transition-colors p-1 rounded-full min-w-[120px]"
        >
          {token ? (
            token.icon ? (
              <Image
                width={32}
                height={32}
                className="w-7 h-7 rounded-full"
                src={token.icon}
                alt="icon"
              />
            ) : (
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: stringToColor(token.symbol) }}
              >
                {token.symbol.charAt(0)}
              </div>
            )
          ) : (
            <div className="w-7 h-7 rounded-full bg-slate-600" />
          )}
          <span className="mx-2 font-bold">{token?.symbol}</span>
        </button>
      </div>
    </div>
  );
};

export default TokenInput;

