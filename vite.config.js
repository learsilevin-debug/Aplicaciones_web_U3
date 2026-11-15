import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true // Permite probar la PWA en modo desarrollo
      },
      manifest: {
        name: 'PowerFit SPA',
        short_name: 'PowerFit',
        description: 'Catálogo interactivo de suplementos deportivos',
        theme_color: '#e63946',
        background_color: '#f4f4f4',
        display: 'standalone',
        icons: [
          // Icono genérico 
          {
            src: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // Estrategia de caché para los archivos de la API y recursos
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})