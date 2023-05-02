import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Desafio-02-Cofee-Delivery',
  plugins: [react()],
})
