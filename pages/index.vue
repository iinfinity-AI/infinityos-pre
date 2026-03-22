<template>
  <div>
    <section id="hero" class="pt-24 pb-20 lg:pt-28 lg:pb-28 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-800">
            Private Beta Open For Early Cohorts
          </p>
          <h1 class="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            One AI-Powered
            <span class="text-blue-700">Operating System</span>
            for Modern Organizations
          </h1>
          <p class="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            Replace disconnected tools with one intelligent platform for collaboration, operations, workforce insights, and automation.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#" @click.prevent="openWaitlist" class="btn-primary">Join The Waitlist</a>
            <a href="#platform" class="btn-secondary">Explore Platform</a>
          </div>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-slate-900">Live Snapshot</h2>
            <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Healthy</span>
          </div>
          <div class="mt-6 grid grid-cols-2 gap-4">
            <div class="rounded-2xl bg-slate-50 p-4">
              <p class="text-sm text-slate-500">Active Users</p>
              <p class="mt-1 text-2xl font-bold text-slate-900">2,847</p>
            </div>
            <div class="rounded-2xl bg-slate-50 p-4">
              <p class="text-sm text-slate-500">Engagement</p>
              <p class="mt-1 text-2xl font-bold text-slate-900">94%</p>
            </div>
          </div>
          <div class="mt-6 space-y-3">
            <div class="rounded-xl border border-slate-200 px-4 py-3 flex items-center justify-between">
              <span class="font-medium text-slate-800">VisionOS</span>
              <span class="text-sm text-emerald-700 font-semibold">Online</span>
            </div>
            <div class="rounded-xl border border-slate-200 px-4 py-3 flex items-center justify-between">
              <span class="font-medium text-slate-800">PulseOS</span>
              <span class="text-sm text-emerald-700 font-semibold">Online</span>
            </div>
            <div class="rounded-xl border border-slate-200 px-4 py-3 flex items-center justify-between">
              <span class="font-medium text-slate-800">EchoOS</span>
              <span class="text-sm text-amber-700 font-semibold">Limited alerts</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PlatformOverview />
    <Modules />

    <section id="pricing" class="py-24 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900">Simple, Scalable Pricing</h2>
          <p class="mt-5 text-lg text-slate-600 leading-relaxed">
            Choose the plan that matches your current stage and expand without replatforming.
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="plan in plans"
            :key="plan.name"
            class="rounded-3xl border p-8 bg-white"
            :class="plan.featured ? 'border-blue-300 shadow-lg ring-2 ring-blue-100' : 'border-slate-200 shadow-sm'"
          >
            <p class="text-sm font-semibold" :class="plan.accent">{{ plan.subtitle }}</p>
            <h3 class="mt-2 text-3xl font-bold text-slate-900">{{ plan.name }}</h3>
            <p class="mt-2 text-slate-600">{{ plan.description }}</p>
            <p class="mt-5 text-2xl font-bold text-slate-900">{{ plan.price }}</p>
            <ul class="mt-6 space-y-3">
              <li v-for="item in plan.items" :key="item" class="flex items-start gap-3 text-slate-700">
                <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full" :class="plan.dot"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <a href="#" @click.prevent="openWaitlist" class="btn-primary mt-8 inline-block w-full text-center">
              {{ plan.cta }}
            </a>
          </article>
        </div>

        <PricingTable @join-waitlist="openWaitlist" />
      </div>
    </section>

    <ScalingJourney />
    <FAQ />
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const normalizedSiteUrl = computed(() => config.public.siteUrl.replace(/\/$/, ''))
const canonicalUrl = computed(() => `${normalizedSiteUrl.value}${route.path || '/'}`)
const ogImage = computed(() => `${normalizedSiteUrl.value}/og-infinityos.svg`)

useSeoMeta({
  title: 'AI-Powered Unified Operating System for Organizations',
  description: 'InfinityOS unifies collaboration, operations, workforce intelligence, and automation into one AI-powered operating system for modern organizations.',
  keywords: 'AI operating system, enterprise workflow automation, workforce intelligence platform, unified business platform, AI operations software, enterprise collaboration platform',
  ogTitle: 'InfinityOS: Unified AI Operating System For Teams And Enterprises',
  ogDescription: 'Replace fragmented tools with one intelligent platform that scales from startup workflows to enterprise operations.',
  ogImage: () => ogImage.value,
  ogImageAlt: 'InfinityOS platform preview and unified modules',
  ogUrl: () => canonicalUrl.value,
  twitterTitle: 'InfinityOS: Unified AI Operating System',
  twitterDescription: 'One platform for work, operations, analytics, and automation.',
  twitterImage: () => ogImage.value
})

const faqSchemaItems = [
  {
    question: 'What is InfinityOS?',
    answer: 'InfinityOS is an AI-powered operating layer that unifies collaboration, workflows, analytics, and automation into one platform.'
  },
  {
    question: 'When is private beta access available?',
    answer: 'Private beta onboarding is rolling in 2026, with priority given to waitlist teams that fit early product cohorts.'
  },
  {
    question: 'How does pricing work?',
    answer: 'Pricing is tiered by capabilities and scale. Teams can start on Starter and move to Growth, Scale, or Enterprise as needs evolve.'
  },
  {
    question: 'Can we migrate gradually?',
    answer: 'Yes. Most organizations begin with one workflow area, then add modules over time without replatforming.'
  },
  {
    question: 'Is InfinityOS secure for enterprise teams?',
    answer: 'Yes. InfinityOS includes role-based access controls, audit logging, and security best practices designed for organizations with strict governance requirements.'
  }
]

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      key: 'software-app-schema',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'InfinityOS',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: canonicalUrl.value,
        offers: [
          { '@type': 'Offer', name: 'Starter', price: '29', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Growth', price: '79', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Scale', price: '149', priceCurrency: 'USD' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      key: 'faq-schema',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqSchemaItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      })
    }
  ]
}))

const plans = [
  {
    name: 'Starter',
    subtitle: 'Core Foundation',
    description: 'Best for startups and small teams.',
    price: '$29 / user / month',
    items: ['Task and project workspace', 'Team collaboration hub', '5GB storage'],
    cta: 'Join Waitlist',
    accent: 'text-emerald-700',
    dot: 'bg-emerald-500',
    featured: false
  },
  {
    name: 'Growth',
    subtitle: 'Most Popular',
    description: 'For scaling teams with AI workflows.',
    price: '$79 / user / month',
    items: ['Everything in Starter', 'NeuroCoreOS insights', 'Workforce intelligence'],
    cta: 'Join Waitlist',
    accent: 'text-blue-700',
    dot: 'bg-blue-500',
    featured: true
  },
  {
    name: 'Scale',
    subtitle: 'Automation Suite',
    description: 'For advanced operations and automation.',
    price: '$149 / user / month',
    items: ['Everything in Growth', 'Advanced AI predictions', 'Workflow automation'],
    cta: 'Join Waitlist',
    accent: 'text-violet-700',
    dot: 'bg-violet-500',
    featured: false
  },
  {
    name: 'Enterprise',
    subtitle: 'Custom Deployment',
    description: 'For organizations with compliance and scale needs.',
    price: 'Custom pricing',
    items: ['Full platform access', 'Compliance controls', 'Dedicated support'],
    cta: 'Contact Sales',
    accent: 'text-orange-700',
    dot: 'bg-orange-500',
    featured: false
  }
]

const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>
