import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/klhospital/', // 👈 This matches your Tomcat folder name
})
