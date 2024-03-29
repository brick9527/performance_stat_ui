import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preprocessorOptions: {
    less: {
      charset: false,
      additionalData: '@import "./src/assets/style/global.less";',
    },
  },
})
