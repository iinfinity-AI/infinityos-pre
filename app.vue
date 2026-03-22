<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const normalizedSiteUrl = computed(() => config.public.siteUrl.replace(/\/$/, ''))
const canonicalUrl = computed(() => {
  const path = route.path || '/'
  return `${normalizedSiteUrl.value}${path}`
})

const defaultOgImage = computed(() => `${normalizedSiteUrl.value}/og-infinityos.svg`)

useHead(() => ({
  link: [
    { rel: 'canonical', href: canonicalUrl.value }
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'org-schema',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: config.public.siteName,
        url: normalizedSiteUrl.value,
        logo: `${normalizedSiteUrl.value}/og-infinityos.svg`,
        sameAs: []
      })
    },
    {
      type: 'application/ld+json',
      key: 'website-schema',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: config.public.siteName,
        url: normalizedSiteUrl.value,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${normalizedSiteUrl.value}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
}))

useSeoMeta({
  ogSiteName: config.public.siteName,
  ogType: 'website',
  ogUrl: () => canonicalUrl.value,
  ogImage: () => defaultOgImage.value,
  twitterCard: 'summary_large_image',
  twitterImage: () => defaultOgImage.value
})
</script>
