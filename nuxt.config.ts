// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
