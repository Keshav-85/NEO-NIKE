import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // This is crucial for Netlify where variables are often set in the UI, not a .env file.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: '/',
    define: {
      // This bridges the node-side environment variable to the client-side code.
      // It replaces 'process.env.API_KEY' in your code with the string value of the key.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY),
    }
  }
})