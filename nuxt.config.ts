// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-22',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools'
  ],
  app: {
    head: {
      title: 'InfinityOS - The AI-Powered Unified Operating System for Organizations',
      meta: [
        { name: 'description', content: 'Replace fragmented tools with one intelligent, modular platform for work, operations, intelligence, and growth. Join the waitlist for early access.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:title', content: 'InfinityOS - Unified AI Operating Platform' },
        { property: 'og:description', content: 'One system to manage work, communication, operations, workforce intelligence, and more. Start small, scale enterprise.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      waitlistUrl: 'https://forms.office.com/r/yk3QiHKFsu'
    }
  }
})

