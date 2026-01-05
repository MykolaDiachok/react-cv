import { defineConfig } from 'vitest/config';
// @ts-ignore
import react from '@vitejs/plugin-react';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';
// @ts-ignore
import path from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/tests/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
    },
  },
});
