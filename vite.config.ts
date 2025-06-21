import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',               // ルートはプロジェクト直下
  publicDir: 'public',     // 静的ファイルは public
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'public/index.html', // ここで index.html の場所を指定！
    },
    outDir: 'dist',
  },
});
