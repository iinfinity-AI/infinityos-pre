// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-22',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'InfinityOS',
      titleTemplate: '%s | InfinityOS',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'InfinityOS is an AI-powered operating system for organizations, unifying work, operations, and intelligence into one scalable platform.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      waitlistUrl: 'https://forms.office.com/r/yk3QiHKFsu',
      siteUrl: 'https://os.iinfinityai.com',
      siteName: 'InfinityOS'
    }
  }
})
