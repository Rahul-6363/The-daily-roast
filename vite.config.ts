import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    target: 'es2020',

    minify: 'esbuild',

    sourcemap: false,

    chunkSizeWarningLimit: 1200,

    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // React bundle
          if (
            id.includes('react') ||
            id.includes('react-dom')
          ) {
            return 'react-vendor'
          }

          // Animation libraries
          if (
            id.includes('framer-motion') ||
            id.includes('gsap')
          ) {
            return 'animation-vendor'
          }

          // Lenis
          if (id.includes('@studio-freight/lenis')) {
            return 'lenis'
          }
        },

        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  server: {
    host: true,
    port: 5173,
  },

  preview: {
    host: true,
    port: 4173,
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'gsap',
      '@studio-freight/lenis',
    ],
  },
})