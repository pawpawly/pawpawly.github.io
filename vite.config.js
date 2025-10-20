import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    include: ['react-native-web'],
    exclude: ['react-bits'],
  },
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      'react-native-web': 'react-native-web',
    },
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
    commonjsOptions: {
      include: [/react-bits/, /node_modules/],
      transformMixedEsModules: true,
    },
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})
