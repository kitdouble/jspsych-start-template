import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/', // CI sets this to "/<repo>/" for Pages
  server: { port: 5173 },
});