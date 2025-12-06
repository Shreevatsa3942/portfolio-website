import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for Vercel, or '/portfolio/' for GitHub Pages
  // Set via environment: VITE_BASE_PATH=/portfolio/ npm run build
  base: process.env.VITE_BASE_PATH || '/',
})
