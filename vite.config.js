import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 12000,
    strictPort: true,
  },
  preview: {
    port: 12000,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
})
