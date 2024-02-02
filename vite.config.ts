import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import dts from "vite-plugin-dts";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 这里定义了需要生成d.ts文件的目录，如果有多个目录，可以使用数组
      include: ["src/packages/**/*.{vue,ts}"],
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      // 入口
      entry: path.resolve(__dirname, 'src/packages/emoji-mart-vue/index.ts'),
      name: 'emoji-mart-vue',
      fileName: 'emoji-mart-vue'
    },
    rollupOptions: {
      // 不需要打包进库的依赖，忽略vue
      external: ['vue', 'emoji-mart'],
      output: {
        // UMD构建模式下为这些外部的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
