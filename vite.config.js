import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import pluginPurgeCSS from 'vite-plugin-purge'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    // pluginPurgeCSS({
    //   content: [
    //     'index.html',
    //     'src/**/*.js',
    //     'src/**/*.jsx',
    //     'src/**/**/*.jsx',
    //     'src/**/**/**/*.jsx',
    //     'src/**/**/**/**/*.jsx'
    //   ],
    //   css: [
    //     'node_modules/@vscode/codicons/dist/codicon.css',
    //     'src/index.css',
    //     'src/assets/icons8/fluent/main.css',
    //     'src/assets/fonts/Fira_Code_v6.2/fira_code.css',
    //     'src/assets/fonts/googlefonts/Montserrat/main.css',
    //     'src/assets/fonts/JetBrainsMono-2.304/main.css'
    //   ],
    //   skippedContentGlobs: ['node_modules/**', 'src/assets/**']
    // })
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
