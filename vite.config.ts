// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', // プロジェクトルート
  publicDir: 'public', // 静的ファイル用フォルダ
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
