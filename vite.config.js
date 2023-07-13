import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sdb-may-23-pokedex-react/",
  plugins: [react()],
})
