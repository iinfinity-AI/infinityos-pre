<template>
  <section id="faq" class="py-24 lg:py-32 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        <p class="mt-5 text-lg text-slate-600">Everything your team needs before joining the InfinityOS waitlist.</p>
      </div>

      <div class="mt-12 space-y-4">
        <article v-for="(item, index) in faqs" :key="item.question" class="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <button
            type="button"
            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
            @click="toggleFAQ(index)"
          >
            <span class="text-lg md:text-xl font-semibold text-slate-900">{{ item.question }}</span>
            <svg
              class="h-5 w-5 text-slate-500 transition-transform duration-200"
              :class="openIndex === index ? 'rotate-180' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="openIndex === index" class="px-6 pb-6 pt-1 border-t border-slate-100">
            <p class="text-slate-600 leading-relaxed">{{ item.answer }}</p>
          </div>
        </article>
      </div>

      <div class="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
        <p class="text-slate-800 font-medium">Still have questions? Our team can walk you through the best rollout plan.</p>
        <a href="#" @click.prevent="openWaitlist" class="btn-primary mt-4 inline-block">Join Waitlist</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()
const openIndex = ref(0)

const faqs = [
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
  },
  {
    question: 'Does InfinityOS integrate with our existing tools?',
    answer: 'Yes. Teams can connect common productivity and operational tools, then centralize workflows over time as they expand module adoption.'
  },
  {
    question: 'How long does onboarding usually take?',
    answer: 'Most teams can complete initial onboarding in days, then phase in additional modules over a few weeks based on internal priorities.'
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No. Plan terms are flexible by tier, and teams can scale usage as needs change.'
  },
  {
    question: 'What support options are available?',
    answer: 'Support varies by plan, from community and priority email to dedicated success guidance for larger deployments.'
  }
]

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>
