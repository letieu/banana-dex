import "./globals.css";
import { Roboto, Geist } from "next/font/google";

const roboto = Roboto({});
const geist = Geist({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}
