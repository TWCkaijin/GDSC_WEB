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
  build: {
    outDir: 'build', 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  define: {
    'REACT_APP_API_URL': JSON.stringify( process.env.REACT_APP_API_URL || 'error'),
    'REACT_APP_FIREBASE_API_KEY': JSON.stringify( process.env.REACT_APP_FIREBASE_API_KEY || 'error'),
    'REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify( process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'error'),
    'REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify( process.env.REACT_APP_FIREBASE_PROJECT_ID || 'error'),
    'REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify( process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'error'),
    'REACT_APP_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify( process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || 'error'),
    'REACT_APP_FIREBASE_APP_ID': JSON.stringify( process.env.REACT_APP_FIREBASE_APP_ID || 'error'),
    'REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify( process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || 'error'),
  },
})
