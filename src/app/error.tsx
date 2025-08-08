'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('100XFT App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto"
      >
        <div className="text-6xl mb-6">💥</div>
        <h1 className="text-2xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-400 mb-6">
          We encountered an unexpected error while loading the page. This has been logged and our team will investigate.
        </p>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-gradient-to-r from-brand-600 to-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-brand-700 hover:to-red-700 transition-all duration-300"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            Go Home
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="text-gray-500 text-sm cursor-pointer">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs text-red-400 bg-gray-900 p-3 rounded overflow-auto max-h-40">
              {error.message}
            </pre>
          </details>
        )}
      </motion.div>
    </div>
  );
}