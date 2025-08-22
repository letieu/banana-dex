
import React from 'react';
import type { Token } from './types';
import { EthIcon } from './components/icons/EthIcon';
import { BtcIcon } from './components/icons/BtcIcon';
import { BananaIcon } from './components/icons/BananaIcon';
import { UsdcIcon } from './components/icons/UsdcIcon';

export const TOKENS: Token[] = [
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: <EthIcon />,
    price: 3500.00,
  },
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: <BtcIcon />,
    price: 65000.00,
  },
  {
    id: 'usdc',
    name: 'USD Coin',
    symbol: 'USDC',
    icon: <UsdcIcon />,
    price: 1.00,
  },
  {
    id: 'banana',
    name: 'Banana',
    symbol: 'BANA',
    icon: <BananaIcon />,
    price: 12.50,
  },
];
