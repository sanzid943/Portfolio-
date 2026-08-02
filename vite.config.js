import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using a relative base ("./") so the built site works correctly
// whether it's deployed at the root of a domain or under a
// GitHub Pages project path like https://username.github.io/repo-name/
export default defineConfig({
  plugins: [react()],
  base: "./",
});
