import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - 404 Error",
  description:
    "The page you are looking for could not be found. Return to BananaSwap homepage to continue trading.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-yellow-500">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you are looking for doesn&apos;t exist. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go Home
          </Link>

          <div className="text-sm text-gray-500">
            <p>Or try these popular pages:</p>
            <div className="mt-2 space-x-4">
              <Link
                href="/swap"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Swap Tokens
              </Link>
              <Link
                href="/tokens"
                className="text-yellow-400 hover:text-yellow-300"
              >
                View Tokens
              </Link>
              <Link
                href="/about"
                className="text-yellow-400 hover:text-yellow-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
