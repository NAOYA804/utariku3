import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: '.', // ルートはプロジェクト直下
  publicDir: 'public', // 静的ファイルは public
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // ✅ ルート直下の index.html を指定
    },
    outDir: 'dist',
  },
});
