import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/burlingtoncodeacademy-students/sdb-may-23-pokedex-react",
  plugins: [react()],
})
