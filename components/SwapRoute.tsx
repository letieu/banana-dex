/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { SwapPath, TokenInfo } from '@/lib/openocean';
import { dexLogos } from '@/lib/dexLogos';
import { stringToColor } from '@/lib/utils';

interface SwapRouteProps {
  path: SwapPath | null;
  fromToken: TokenInfo | undefined;
  toToken: TokenInfo | undefined;
  tokens: TokenInfo[];
}

const renderSubRoutes = (subRoutes: any[], fromToken: TokenInfo | undefined, tokens: TokenInfo[]) => {
  let lastToToken = fromToken;

  return subRoutes.map((subRoute: any, index: number) => {
    const currentFromToken = lastToToken;
    const currentToToken = tokens.find(t => t.address.toLowerCase() === subRoute.to.toLowerCase());
    lastToToken = currentToToken;

    return (
      <div key={index} className="ml-4 pl-4 border-l border-slate-700">
        <div className="flex items-center mb-2">
          <span className="text-slate-400 text-sm">
            {currentFromToken?.symbol} &rarr; {currentToToken?.symbol || 'Unknown'}
          </span>
        </div>
        {subRoute.dexes.map((dex: any, dexIndex: number) => (
          <div key={dexIndex} className="flex items-center justify-between p-2 bg-slate-800 rounded-lg mb-2">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 border border-slate-600" style={{ backgroundColor: dexLogos[dex.dex] ? 'transparent' : stringToColor(dex.dex) }}>
                {dexLogos[dex.dex] ? (
                  <img src={dexLogos[dex.dex]} alt={dex.dex} className="w-full h-full rounded-full" />
                ) : (
                  <div />
                )}
              </div>
              <span className="text-sm font-semibold text-slate-300">{dex.dex}</span>
            </div>
            <span className="text-sm text-yellow-500 font-semibold">{dex.percentage}%</span>
          </div>
        ))}
      </div>
    );
  });
};

const SwapRoute: React.FC<SwapRouteProps> = ({ path, fromToken, toToken, tokens }) => {
  if (!path || !path.routes || path.routes.length === 0) {
    return null;
  }

  const bestRoute = (path.routes as any[])[0];

  return (
    <div className="mt-4 p-4 bg-slate-900/50 rounded-2xl">
      <h3 className="text-lg font-semibold text-yellow-500 mb-3 text-center">Best Route (Estimated)</h3>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-base font-bold text-slate-200">
            {fromToken?.symbol} &rarr; {toToken?.symbol}
          </span>
          <span className="text-base font-bold text-yellow-500">{bestRoute.percentage}%</span>
        </div>
        {bestRoute.subRoutes && renderSubRoutes(bestRoute.subRoutes, fromToken, tokens)}
      </div>
    </div>
  );
};

export default SwapRoute;
