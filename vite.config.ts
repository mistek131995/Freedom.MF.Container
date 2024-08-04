import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react(),
      federation({
        name: "container",
        remotes: {
            app_catalog: "http://89.23.113.254:81/assets/remoteEntry.js"
        },
        shared: [
            "react"
        ]
      })
    ],
    build: {
      target: "esnext",
    }
})
