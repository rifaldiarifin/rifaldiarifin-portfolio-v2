import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginPurgeCSS from 'vite-plugin-purge'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginPurgeCSS({
      content: [
        'index.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/**/*.jsx',
        './src/**/**/**/*.jsx',
        './src/**/**/**/**/*.jsx'
      ],
      css: ['src/index.css']
    })
  ],
  server: {
    port: 3000,
    hmr: {
      overlay: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  }
})
