import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit as needed (optional)
    rollupOptions: {
      output: {
        manualChunks: {
          // Define custom chunks (optional)
          myChunkName: ['module1', 'module2'],
        },
      },
    },
  },
})
