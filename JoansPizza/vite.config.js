import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    watch: {
      include: ["src/**/*.{js,jsx,ts,tsx}"],
    },
    plugins: [react()],
  },
});
