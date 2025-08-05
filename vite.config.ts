import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      'figma:asset': path.resolve(__dirname, './assets')
    },
  },
  // Handle Figma asset imports
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
  // Configure server
  server: {
    port: 3000,
    open: true
  },
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['./components/ui/**/*.tsx']
        }
      }
    }
  }
})