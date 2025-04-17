import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // Make sure this is present
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

