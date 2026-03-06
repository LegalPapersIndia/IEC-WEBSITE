// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],

  // Proxy setup (development mein CORS aur 404 fix karega)
  server: {
    proxy: {
      // CRM direct call ke liye (agar /leadRoutes use kar rahe ho)
      '/leadRoutes': {
        target: 'https://legalpapers.konceptsoftwaresolutions.com',
        changeOrigin: true,      // Host header ko change karega
        secure: false,           // HTTPS certificate ignore (dev mein)
        rewrite: (path) => path, // path same rakhega
      },

      // Agar tum /api/submit-iec use kar rahe ho (proxy server ke liye)
      // '/api': {
      //   target: 'http://localhost:5173', // agar local mein backend chala rahe ho (optional)
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/api/, '/api')
      // }
    }
  }
})