"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("BananaSwap Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          {/* Error icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-6xl">⚠️</span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">
            Something went wrong!
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            We encountered an unexpected error while loading BananaSwap. This
            might be a temporary issue.
          </p>

          {/* Error details for developers */}
          {process.env.NODE_ENV === "development" && (
            <details className="text-left bg-slate-800 p-4 rounded-lg mb-6">
              <summary className="text-yellow-400 cursor-pointer font-semibold mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-sm text-gray-300 overflow-auto">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full md:w-auto bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Go Home
            </Link>

            <Link
              href="/swap"
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Try Swap
            </Link>
          </div>
        </div>

        {/* Support information */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <p className="text-gray-400 text-sm mb-4">
            Still having issues? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="https://discord.gg/bananaswap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              Discord Support
            </a>
            <a
              href="mailto:support@bnnswap.com"
              className="text-yellow-400 hover:text-yellow-300"
            >
              Email Support
            </a>
            <a
              href="https://twitter.com/bananaswap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
