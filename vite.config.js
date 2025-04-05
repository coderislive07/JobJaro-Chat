// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // ✅ This is the correct import

export default defineConfig({
  plugins: [tailwindcss()],
});
