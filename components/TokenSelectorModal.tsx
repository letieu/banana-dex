
import React, { useState, useMemo } from 'react';
import type { Token } from '../types';
import { CloseIcon } from './icons/CloseIcon';

interface TokenSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToken: (token: Token) => void;
  tokens: Token[];
}

const TokenSelectorModal: React.FC<TokenSelectorModalProps> = ({ isOpen, onClose, onSelectToken, tokens }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTokens = useMemo(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    return tokens.filter(token =>
      token.name.toLowerCase().includes(lowercasedFilter) ||
      token.symbol.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm, tokens]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="w-full max-w-md bg-slate-800 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Select a token</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
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
          <ul className="space-y-1">
            {filteredTokens.map(token => (
              <li key={token.id}>
                <button
                  onClick={() => onSelectToken(token)}
                  className="w-full flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <span className="w-8 h-8 mr-4">{token.icon}</span>
                  <div className="text-left">
                    <p className="font-bold text-white">{token.symbol}</p>
                    <p className="text-sm text-gray-400">{token.name}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TokenSelectorModal;
