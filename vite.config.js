import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    fs: {
      allow: [
        'C:/Users/20269/Documents/New project',
        'C:/Users/20269/Desktop/作品集解压缩'
      ]
    }
  },
  preview: {
    host: '0.0.0.0'
  }
})
