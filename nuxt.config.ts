// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   css: ["~/assets/css/main.scss"],
   modules: ['nuxt-icon'],
   alias: {
      assets: "/<rootDir>/assets",
   },
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
});
