import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'figma-asset-resolver',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          // Extract the asset name from the import path
          const assetId = id.split('/')[1];
          // For simplicity, we'll use color-wheel.png for all assets
          // In a real app, you'd map each asset ID to a specific file
          return path.resolve(__dirname, './assets/color-wheel.png');
        }
        return null;
      }
    }
  ],
  base: '/zyloform-app-design/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
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