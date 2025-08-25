# 🍌 BnnSwap - Cross-Chain DEX

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**BnnSwap** is the ultimate cross-chain decentralized exchange that enables users to swap tokens across 40+ blockchains with the best rates, lightning-fast trades, and rock-solid security.

## ✨ Features

- 🔄 **Cross-Chain Swapping**: Trade assets across multiple blockchains seamlessly
- 🎯 **Best Rate Routing**: Smart algorithm finds optimal trading paths
- 🛡️ **Non-Custodial Security**: Your keys, your crypto - always
- ⚡ **Lightning Fast**: Optimized for speed and efficiency
- 🌐 **Multi-Chain Support**: Ethereum, BNB Chain, Polygon, Arbitrum, and 35+ more
- 📱 **Responsive Design**: Works perfectly on all devices
- 🔒 **Audited Smart Contracts**: Security-first approach

## 🚀 Supported Blockchains

- **Ethereum** (ETH)
- **BNB Chain** (BNB)
- **Polygon** (MATIC)
- **Arbitrum One** (ARB)
- **Optimism** (OP)
- **Base** (ETH)
- **zkSync Era** (ETH)
- **Linea** (ETH)
- **Scroll** (ETH)
- **And 30+ more networks**

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Motion (Framer Motion)
- **Web3**: Reown AppKit, Wagmi, Viem
- **State Management**: TanStack React Query
- **HTTP Client**: Axios
- **Build Tool**: Turbopack

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bnn-dex.git
   cd banana-dex
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration:
   ```env
   NEXT_PUBLIC_APP_NAME=BnnSwap
   NEXT_PUBLIC_APP_URL=https://bnnswap.com
   NEXT_PUBLIC_OPENOCEAN_API_URL=https://open-api.openocean.finance
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
banana-dex/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/             # React components
│   ├── Hero.tsx           # Hero section with structured data
│   ├── SwapCard.tsx       # Main swap interface
│   ├── FeaturesGrid.tsx   # Features showcase
│   └── icons/             # SVG icons
├── lib/                    # Utility libraries
│   ├── hooks/             # Custom React hooks
│   ├── constants.ts       # Blockchain constants
│   └── openocean.ts       # OpenOcean API integration
├── config/                 # App configuration
└── public/                 # Static assets
```

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Duplicate content prevention

## 🔐 Security Features

- **Non-Custodial**: Users maintain full control of their funds
- **Smart Contract Audits**: Regular security audits
- **Open Source**: Transparent and verifiable code
- **Web3 Security**: Best practices for DeFi applications

## 📈 Performance Features

- **Turbopack**: Next.js 15's lightning-fast bundler
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Efficient bundle splitting
- **Lazy Loading**: Optimized component loading

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.bnnswap.com](https://docs.bnnswap.com)
- **Discord**: [discord.gg/bnnswap](https://discord.gg/bnnswap)
- **Twitter**: [@bnnswap](https://twitter.com/bnnswap)
- **Email**: support@bnnswap.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Reown](https://reown.xyz/) for AppKit integration
- [OpenOcean](https://openocean.finance/) for liquidity aggregation
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Built with ❤️ by the BnnSwap Team**

*Swap smarter, not harder* 🍌
