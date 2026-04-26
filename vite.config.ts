import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure .htaccess is copied to dist folder
  publicDir: 'public',
  build: {
    // Output directory
    outDir: 'dist',
    // Generate source maps for production (optional, set to false for smaller builds)
    sourcemap: false,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Minify and compress (using esbuild, which is faster than terser)
    minify: 'esbuild',
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Image optimization
  assetsInclude: ['**/*.webp'],
})
