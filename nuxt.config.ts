// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-simple-sitemap'],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js'
  },
  sitemap: {
    siteUrl: 'https://cerana.tech'
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
        {
          name: 'description',
          content:
            '東蜂工作室擁有豐富實作經驗，我們將根據您的需求和目標，建造出一個完全符合您期望的網站，讓您的網站與眾不同。'
        },
        { name: 'og:title', content: '東蜂科技 - 官網' },
        {
          name: 'og:description',
          content:
            '東蜂工作室擁有豐富實作經驗，我們將根據您的需求和目標，建造出一個完全符合您期望的網站，讓您的網站與眾不同。'
        },
        { name: 'og:image', content: '/og-image.png' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  }
})
