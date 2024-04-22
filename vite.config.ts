import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: '/',
  preview: {
    port: 5174,
    strictPort: true,
  },
  server: {
    port: 5174,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5174",
  },
});