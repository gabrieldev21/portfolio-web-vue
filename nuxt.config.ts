import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // modules: ["@nuxt/content"],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/style/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
