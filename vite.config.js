import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { copyFileSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),

    // eget plugin för att kopiera config efter build
    {
      name: 'copy-staticwebapp-config',
      closeBundle() {
        copyFileSync('staticwebapp.config.json', 'dist/staticwebapp.config.json')
      }
    }
  ]
})
