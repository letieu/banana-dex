
import React from 'react';
import { LightningIcon } from './icons/LightningIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';

const features = [
  {
    icon: <LightningIcon className="w-10 h-10 text-yellow-400" />,
    title: 'Lightning-Fast Swaps',
    description: 'Our optimized routing finds the best prices and executes trades in the blink of an eye.',
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-yellow-400" />,
    title: 'Rock-Solid Security',
    description: 'Trade with confidence. Our smart contracts are audited and your funds are always non-custodial.',
  },
  {
    icon: <TrendingUpIcon className="w-10 h-10 text-yellow-400" />,
    title: 'Deep Liquidity',
    description: 'Access deep liquidity pools for minimal slippage across all your favorite token pairs.',
  },
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-[80px] lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feature) => (
          <div key={feature.title} className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-900/70 mx-auto mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
