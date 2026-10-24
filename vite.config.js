import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configured with base: './' so it works out-of-the-box on both Vercel (root domain)
// and GitHub Pages (repository subpath) without broken asset paths.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
