import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: { 
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'JsonLogicTransformer',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `jsonlogic-transformer.${format}.js`,
    },
  },
  resolve: { alias: { src: resolve('src/') } },
})