import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Sunucuyu tüm arayüzlere açar (127.0.0.1 dahil)
    port: 5173, // Portu sabitler
  },
});
