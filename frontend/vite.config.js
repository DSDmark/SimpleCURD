import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PORT = import.meta.env.VITE_LOCAL_PORT || 8000

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  }
})


