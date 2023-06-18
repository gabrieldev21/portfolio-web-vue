// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // modules: ["@nuxt/content"],
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/style/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
