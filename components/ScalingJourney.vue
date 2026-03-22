<template>
  <section id="scale" class="py-24 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <p class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-800">
          Growth Path
        </p>
        <h2 class="mt-6 text-3xl md:text-5xl font-extrabold text-slate-900">Start Small, Scale Confidently</h2>
        <p class="mt-6 text-lg text-slate-600 leading-relaxed">Move from core collaboration to enterprise-grade automation without changing platforms.</p>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <article v-for="step in steps" :key="step.number" class="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl text-white font-bold" :class="step.badgeClass">
              {{ step.number }}
            </div>
            <h3 class="text-2xl font-bold text-slate-900">{{ step.title }}</h3>
          </div>
          <p class="mt-4 text-slate-600 leading-relaxed">{{ step.description }}</p>
          <ul class="mt-6 space-y-3">
            <li v-for="item in step.items" :key="item" class="flex items-start gap-3 text-slate-700">
              <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full" :class="step.dotClass"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>

      <div class="mt-12 rounded-3xl bg-slate-900 px-8 py-10 text-center text-white">
        <h3 class="text-2xl font-bold">No lock-in. Add capabilities when you are ready.</h3>
        <p class="mt-3 text-slate-200">Your team keeps one source of truth while modules expand around it.</p>
        <a href="#" @click.prevent="openWaitlist" class="mt-6 inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100">
          Start Your Journey
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()

const steps = [
  {
    number: '01',
    title: 'Starter Team',
    description: 'Centralize day-to-day work and remove tool sprawl.',
    badgeClass: 'bg-emerald-600',
    dotClass: 'bg-emerald-500',
    items: ['Task management and collaboration', 'Unified docs and file storage', 'Shared team visibility']
  },
  {
    number: '02',
    title: 'Growth Phase',
    description: 'Introduce AI-powered insights and data-backed planning.',
    badgeClass: 'bg-blue-600',
    dotClass: 'bg-blue-500',
    items: ['NeuroCoreOS insights', 'Predictive dashboards', 'Cross-team workflow optimization']
  },
  {
    number: '03',
    title: 'Enterprise Scale',
    description: 'Run advanced automation, governance, and executive operations.',
    badgeClass: 'bg-violet-600',
    dotClass: 'bg-violet-500',
    items: ['Automation and API orchestration', 'Compliance and security controls', 'Dedicated support and onboarding']
  }
]

const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>
