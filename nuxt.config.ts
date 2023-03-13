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
      title: '東蜂科技 - 官網',
      meta: [
        { name: 'description', content: '東蜂科技是一間專注於網頁開發的公司，我們提供網頁開發、網頁設計、網頁維護、網頁優化、網頁擴充等服務。' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.svg' }]
    }
  }
})
