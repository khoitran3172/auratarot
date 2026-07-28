import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // GitHub Pages serves the app from /<repo-name>/, so set BASE_PATH=/aura-tarot/ when building for it
    base: process.env.BASE_PATH || '/',
    plugins: [react(), tailwindcss()],
    // No `@` alias: as `@/*` it shadowed every scoped npm package for tsx's
    // path resolver, which broke `npm run dev` (vite.config.ts failed to load
    // because `@tailwindcss/vite` resolved to `./tailwindcss/vite`).
    // Nothing imported through it, so it is gone rather than renamed.
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
