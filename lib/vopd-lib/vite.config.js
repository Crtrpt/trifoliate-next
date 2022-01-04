import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    },
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'Vopd',
      fileName: (format) => `vopd-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }

})
