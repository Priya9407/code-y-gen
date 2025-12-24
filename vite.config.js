// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',       // important for correct paths
  build: {
    outDir: 'dist'  // Vercel will look here
  }
})
