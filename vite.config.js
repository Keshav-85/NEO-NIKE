import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    // Use relative base path to ensure assets load correctly on any hosting path
    base: './',
    define: {
      // Expose the API key to the client-side code
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY),
    }
  }
})