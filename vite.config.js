import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from 'tailwindcss'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  resolve:{
    alias:{
      '@':'/src',
      '@assets':'/src/assets',
    }
  },
  // base : '/vite-deploy-demo/'
  base: '/'
})
