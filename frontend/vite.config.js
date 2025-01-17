/* eslint-disable no-undef */
import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/" : {
        target : process.env.VITE_BACKEND_URL,
        changeOrigin: true,
      }
    }
  }
})