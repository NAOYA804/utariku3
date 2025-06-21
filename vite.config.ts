import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', // プロジェクトルートを明示
  publicDir: 'public', // 静的ファイルの場所（favicon など）
  plugins: [react()],
  build: {
    outDir: 'dist', // ビルド後の出力先
  },
})
