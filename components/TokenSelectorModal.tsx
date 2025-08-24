import React, { useState, useMemo, useEffect } from "react";
import { CloseIcon } from "./icons/CloseIcon";
import { TokenInfo } from "@/lib/openocean";
import Image from "next/image";
import { useAppKitNetwork } from "@reown/appkit/react";

interface TokenSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToken: (token: TokenInfo) => void;
  tokens: TokenInfo[];
  loading: boolean;
  error?: string;
}

const TokenSelectorModal: React.FC<TokenSelectorModalProps> = ({
  isOpen,
  onClose,
  onSelectToken,
  tokens,
  error,
  loading,
}) => {
  const { chainId } = useAppKitNetwork();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isOpen && chainId) {
    }
  }, [isOpen, chainId]);

  const filteredTokens = useMemo(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    return tokens.filter(
      (token) =>
        token.name.toLowerCase().includes(lowercasedFilter) ||
        token.symbol.toLowerCase().includes(lowercasedFilter),
    );
  }, [searchTerm, tokens]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-slate-800 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Select a token</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search name or paste address"
            className="w-full bg-slate-900/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-grow overflow-y-auto max-h-[60vh] px-2 pb-4">
          {loading ? (
            <div className="flex justify-center items-center h-full p-8">
              <p className="text-gray-400">Loading tokens...</p>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-full p-8">
              <p className="text-red-400">{error}</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {filteredTokens.map((token) => (
                <li key={token.address}>
                  <button
                    onClick={() => {
                      onSelectToken(token);
                      onClose();
                    }}
                    className="w-full flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <Image
                      width={32}
                      height={32}
                      src={token.icon || "https://placehold.co/600x400"}
                      alt={"icon"}
                      className="w-8 h-8 mr-4 rounded-full"
                    />
                    <div className="text-left">
                      <p className="font-bold text-white">{token.symbol}</p>
                      <p className="text-sm text-gray-400">{token.name}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenSelectorModal;
