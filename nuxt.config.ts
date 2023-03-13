// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js'
  },
  nitro: {
    // prerender: {
    //   routes: ['/']
    // }
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: '東蜂工作室 - 官網',
      meta: [
        { name: 'description', content: '東蜂科技是一間專注於軟體開發的工作室，我們提供網站開發、網頁設計、服務架構、資料庫設計、行動應用程式開發等服務。' },
        { name: 'og:title', content: '東蜂科技 - 官網' },
        { name: 'og:description', content: '東蜂科技是一間專注於軟體開發的工作室，我們提供網站開發、網頁設計、服務架構、資料庫設計、行動應用程式開發等服務。' },
        { name: 'og:image', content: '/og-image.png' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.svg' }]
    }
  }
})
