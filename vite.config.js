import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Creatxt-Dashboard",
  optimizeDeps: {
    entries: [], // Optional: specify entry files to pre-bundle
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'EMFILE') return; // Suppress too many open files warning
        warn(warning);
      },
    },
  },
  worker: {
    format: 'es',
  },
});


