import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Use '/' for local dev, and '/my-portfolio-app/' for your GitHub Pages repository build
    base: command === 'serve' ? '/' : '/my-portfolio-app/',
  }
})