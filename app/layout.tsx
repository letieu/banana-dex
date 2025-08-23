import ContextProvider from "@/config/provider";
import "./globals.css";
import { Geist } from "next/font/google";
import { headers } from "next/headers";

const geist = Geist({});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-slate-900">
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}
