import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: "container",
        remotes: [

        ],
        shared: [
            "react"
        ]
      })
  ],
    build: {
      outDir: '/usr/share/nginx/html'
    }
})
