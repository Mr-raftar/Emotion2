import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Emotion2/", // Ensure correct asset loading on GitHub Pages
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
