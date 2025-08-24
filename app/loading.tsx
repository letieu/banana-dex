export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Banana loading animation */}
          <div className="w-20 h-20 mx-auto mb-4">
            <div className="w-full h-full bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-full h-full bg-yellow-600 rounded-full animate-ping opacity-75"></div>
          </div>
          
          {/* Loading text */}
          <h2 className="text-2xl font-bold text-white mb-2">Loading BananaSwap</h2>
          <p className="text-gray-400">Preparing your cross-chain trading experience...</p>
          
          {/* Loading dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">⚡</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-sm">Optimized for speed</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">🔒</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Secure</h3>
            <p className="text-gray-400 text-sm">Non-custodial trading</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-yellow-400 text-xl">🌐</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Multi-Chain</h3>
            <p className="text-gray-400 text-sm">40+ blockchains</p>
          </div>
        </div>
      </div>
    </div>
  )
}
