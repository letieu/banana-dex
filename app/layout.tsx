import ContextProvider from "@/config/provider";
import "./globals.css";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import type { Metadata } from "next";

const geist = Geist({});

export const metadata: Metadata = {
  title: {
    default: "BananaSwap - Cross-Chain DEX | Best Rates Across 40+ Blockchains",
    template: "%s | BananaSwap",
  },
  description:
    "BananaSwap is the ultimate cross-chain decentralized exchange. Swap tokens across 40+ blockchains with the best rates, lightning-fast trades, and rock-solid security. Trade on Ethereum, BNB Chain, Polygon, Arbitrum, and more.",
  keywords: [
    "DEX",
    "decentralized exchange",
    "cross-chain swap",
    "crypto trading",
    "blockchain swap",
    "multi-chain DEX",
    "Ethereum swap",
    "BNB Chain swap",
    "Polygon swap",
    "Arbitrum swap",
    "crypto exchange",
    "token swap",
    "DeFi",
    "Web3",
    "cryptocurrency",
  ],
  authors: [{ name: "BananaSwap Team" }],
  creator: "BananaSwap",
  publisher: "BananaSwap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bananaswap.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bananaswap.com",
    siteName: "BananaSwap",
    title: "BananaSwap - Cross-Chain DEX | Best Rates Across 40+ Blockchains",
    description:
      "The ultimate cross-chain swap experience. Find the best routes for lightning-fast trades on all your favorite networks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BananaSwap - Cross-Chain DEX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BananaSwap - Cross-Chain DEX | Best Rates Across 40+ Blockchains",
    description:
      "The ultimate cross-chain swap experience. Find the best routes for lightning-fast trades on all your favorite networks.",
    images: ["/og-image.png"],
    creator: "@bananaswap",
    site: "@bananaswap",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "DeFi, Cryptocurrency, Blockchain",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");
  return (
    <html lang="en" className={geist.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fbbf24" />
        <meta name="msapplication-TileColor" content="#fbbf24" />
      </head>
      <body className="bg-slate-900">
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}
