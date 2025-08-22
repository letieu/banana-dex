
import type React from 'react';

export interface Token {
  id: string;
  name: string;
  symbol: string;
  icon: React.ReactNode;
  price: number; // Price in USD for simulation
}
