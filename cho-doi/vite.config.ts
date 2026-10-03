/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

// Deploy dưới aura.id.vn/cho-doi/ nên CI build với BASE_PATH=/cho-doi/
export default defineConfig({
  base: process.env.BASE_PATH || './',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1600,
    rollupOptions: { output: { manualChunks: { phaser: ['phaser'] } } },
  },
  test: { include: ['tests/**/*.test.ts'] },
});
