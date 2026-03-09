import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://agenciatodonerds.github.io",

  base: "/tn-template-construct",

  integrations: [tailwind(), react()],
  output: "static", // Forzamos modo estático para GitHub Pages
});
