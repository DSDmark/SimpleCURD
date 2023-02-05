import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@babel/core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      transform(code, id) {
        if (!id.endsWith('.js')) {
          return
        }
        return {
          code: babel.transform(code, {
            filename: id,
            presets: ['@babel/preset-env'],
          }).code,
        }
      },
    },
  ],
})
