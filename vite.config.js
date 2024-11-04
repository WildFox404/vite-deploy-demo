import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      'assets': 'src/assets',
      // 可以根据需要添加更多的别名
    },
  },
  base:"/vite-deploy-demo/",
  plugins: [react()],
})
