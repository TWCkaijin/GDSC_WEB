import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 設置端口為 3000
  },
  define: {
    'REACT_APP_API_URL': JSON.stringify( process.env.REACT_APP_API_URL || 'development'),
  },
})
