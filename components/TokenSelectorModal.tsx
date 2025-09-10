import React, { useState, useMemo, useEffect } from "react";
import { CloseIcon } from "./icons/CloseIcon";
import { TokenInfo } from "@/lib/openocean";
import Image from "next/image";
import { useAppKitNetwork } from "@reown/appkit/react";
import { isAddress } from "viem";
import { readContracts } from "@wagmi/core";
import { wagmiConfig } from "@/config";
import { stringToColor } from "@/lib/utils";

const erc20Abi = [
  { constant: true, inputs: [], name: "name", outputs: [{ name: "", type: "string" }], type: "function" },
  { constant: true, inputs: [], name: "symbol", outputs: [{ name: "", type: "string" }], type: "function" },
  { constant: true, inputs: [], name: "decimals", outputs: [{ name: "", type: "uint8" }], type: "function" },
] as const;

interface TokenSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToken: (token: TokenInfo) => void;
  tokens: TokenInfo[];
  loading: boolean;
  error?: string;
  addToken: (token: TokenInfo) => void;
}

const TokenSelectorModal: React.FC<TokenSelectorModalProps> = ({
  isOpen,
  onClose,
  onSelectToken,
  tokens,
  error,
  loading,
  addToken,
}) => {
  const { chainId } = useAppKitNetwork();
  const [searchTerm, setSearchTerm] = useState("");
  const [foundToken, setFoundToken] = useState<TokenInfo | null>(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      setFoundToken(null);
    }
  }, [isOpen]);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    setFoundToken(null);

    if (isAddress(term)) {
      const tokenExists = tokens.find(t => t.address.toLowerCase() === term.toLowerCase());
      if (tokenExists) {
        setFoundToken(tokenExists);
        return;
      }

      setSearching(true);
      try {
        const contract = { address: term as `0x${string}`, abi: erc20Abi, chainId };
        const results = await readContracts(wagmiConfig, {
          contracts: [
            { ...contract, functionName: 'name' },
            { ...contract, functionName: 'symbol' },
            { ...contract, functionName: 'decimals' },
          ],
        });

        const name = results[0].result as string;
        const symbol = results[1].result as string;
        const decimals = results[2].result as number;

        if (name && symbol && decimals) {
          const newToken: TokenInfo = {
            address: term,
            name,
            symbol,
            decimals,
            icon: "", // No icon for new tokens
            usd: "0",
            volume: 0,
          };
          setFoundToken(newToken);
        }
      } catch (e) {
        console.error("Error fetching token info:", e);
      }
      setSearching(false);
    }
  };

  const filteredTokens = useMemo(() => {
    if (foundToken && foundToken.address.toLowerCase() === searchTerm.toLowerCase()) {
      return [foundToken];
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return tokens.filter(
      (token) =>
        token.name.toLowerCase().includes(lowercasedFilter) ||
        token.symbol.toLowerCase().includes(lowercasedFilter) ||
        token.address.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm, tokens, foundToken]);

  if (!isOpen) return null;

  const handleSelect = (token: TokenInfo) => {
    if (foundToken && token.address === foundToken.address) {
      addToken(foundToken);
    }
    onSelectToken(token);
    onClose();
  };

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
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="flex-grow overflow-y-auto max-h-[60vh] px-2 pb-4">
          {loading || searching ? (
            <div className="flex justify-center items-center h-full p-8">
              <p className="text-gray-400">{searching ? `Searching for token...` : `Loading tokens...`}</p>
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
                    onClick={() => handleSelect(token)}
                    className="w-full flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    {token.icon ? (
                      <Image
                        width={32}
                        height={32}
                        src={token.icon}
                        alt={"icon"}
                        className="w-8 h-8 mr-4 rounded-full"
                      />
                    ) : (
                      <div
                        className="w-8 h-8 mr-4 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: stringToColor(token.symbol) }}
                      >
                        {token.symbol.charAt(0)}
                      </div>
                    )}
                    <div className="text-left">
                      <p className="font-bold text-white">{token.symbol}</p>
                      <p className="text-sm text-gray-400">{token.name}</p>
                    </div>
                  </button>
                </li>
              ))}
              {filteredTokens.length === 0 && !searching && (
                <div className="flex justify-center items-center h-full p-8">
                  <p className="text-gray-400">No tokens found.</p>
                </div>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenSelectorModal;
