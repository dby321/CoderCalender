import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  //++++++++++++++++++++++
  base: './', // !!!!!!! 非常重要，否则打包后无法访问 !!!!!!!
  server: {
    port: 3000,
  },
  //++++++++++++++++++++++
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
