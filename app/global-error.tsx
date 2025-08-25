'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('BananaSwap Global Error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              {/* Critical error icon */}
              <div className="w-24 h-24 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center">
                <span className="text-6xl">🚨</span>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4">Critical Error</h1>
              <p className="text-gray-400 text-lg mb-6">
                BananaSwap has encountered a critical error that prevents the application from loading properly.
              </p>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                <p className="text-red-300 text-sm">
                  This is a serious issue that requires immediate attention. Please try refreshing the page or contact support if the problem persists.
                </p>
              </div>
            </div>
            
            {/* Recovery actions */}
            <div className="space-y-4">
              <button
                onClick={reset}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Try to Recover
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Refresh Page
              </button>
            </div>
            
            {/* Emergency contact */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-gray-400 text-sm mb-4">
                <strong>Emergency Support:</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="https://discord.gg/bananaswap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300"
                >
                  Discord (Priority)
                </a>
                <a 
                  href="mailto:letieu8@gmail.com"
                  className="text-red-400 hover:text-red-300"
                >
                  Emergency Email
                </a>
                <a 
                  href="https://status.bnnswap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300"
                >
                  Status Page
                </a>
              </div>
            </div>
            
            {/* Error ID for support */}
            <div className="mt-6 text-xs text-gray-500">
              Error ID: {error.digest || 'unknown'}
              <br />
              Time: {new Date().toISOString()}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
