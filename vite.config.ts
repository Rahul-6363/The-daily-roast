import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk warning limit since sequences are loaded on demand
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'lenis': ['@studio-freight/lenis'],
        },
      },
    },
    // Enable source maps for production debugging if needed
    sourcemap: false,
    // Minify with esbuild (default, fast)
    minify: 'esbuild',
    target: 'es2020',
  },
  // Pre-bundle deps for faster dev startup
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'gsap', '@studio-freight/lenis'],
  },
})
