import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  resolve:{
    alias:{
      '@':'/src',
      '@assets':'/src/assets',
    }
  },
  base : process.env.VITE_BASE_URL || '/',
})
