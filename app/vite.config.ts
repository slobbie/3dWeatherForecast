import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, 'src/api'),
      },
      {
        find: '@common',
        replacement: path.resolve(__dirname, 'src/common'),
      },
      {
        find: '@feature',
        replacement: path.resolve(__dirname, 'src/feature'),
      },
      {
        find: '@routes',
        replacement: path.resolve(__dirname, 'src/routers'),
      },
    ],
  },
});
