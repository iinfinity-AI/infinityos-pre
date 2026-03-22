<template>
  <section id="modules" class="py-24 lg:py-32 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <p class="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-800">
          Modular By Design
        </p>
        <h2 class="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Activate The Modules You Need
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-slate-600">
          Start with a focused stack and expand by function without migration pain.
        </p>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-3">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          @click="activeTab = tab.id"
          :class="[
            'rounded-2xl px-5 py-3 text-sm md:text-base font-semibold transition-all duration-200 border',
            activeTab === tab.id
              ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="module in activeModules"
          :key="module.name"
          class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
        >
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-xl font-bold text-slate-900">{{ module.name }}</h3>
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{{ module.tag }}</span>
          </div>
          <p class="mt-4 text-slate-600 leading-relaxed">{{ module.description }}</p>
        </article>
      </div>

      <div class="mt-14 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h3 class="text-2xl font-bold text-slate-900">Need a custom rollout plan?</h3>
        <p class="mt-3 text-slate-600 max-w-2xl mx-auto">We can help map modules to your current tooling and team maturity in one onboarding session.</p>
        <button @click="openWaitlist" class="btn-primary mt-6">Request Priority Access</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const config = useRuntimeConfig()
const activeTab = ref('work')

const tabs = [
  { id: 'work', label: 'Work & Collaboration' },
  { id: 'intelligence', label: 'AI & Intelligence' },
  { id: 'operations', label: 'Operations' },
  { id: 'people', label: 'People & HR' },
  { id: 'engineering', label: 'Engineering' }
]

const modulesByTab = {
  work: [
    { name: 'TaskPulseOS', tag: 'Core', description: 'Project planning, tasks, and execution visibility across teams.' },
    { name: 'EchoOS', tag: 'Core', description: 'Unified messaging, async updates, and meeting intelligence.' },
    { name: 'InfinityDrive', tag: 'Core', description: 'Shared documents and structured knowledge with AI search.' }
  ],
  intelligence: [
    { name: 'NeuroCoreOS', tag: 'AI', description: 'Cross-functional insights, anomaly detection, and recommendations.' },
    { name: 'VisionOS', tag: 'AI', description: 'Executive dashboards with trend forecasting and strategic alerts.' },
    { name: 'InsightOS', tag: 'AI', description: 'Team-level analytics for productivity and workflow health.' }
  ],
  operations: [
    { name: 'OpsOS', tag: 'Automation', description: 'Automate approvals, SLA checks, and repetitive operational workflows.' },
    { name: 'FlowBuilder', tag: 'Automation', description: 'No-code workflow orchestration for internal processes.' },
    { name: 'TrustOS', tag: 'Compliance', description: 'Audit trails, policy enforcement, and compliance controls.' }
  ],
  people: [
    { name: 'HireOS', tag: 'People', description: 'Hiring pipeline, candidate collaboration, and role scorecards.' },
    { name: 'TalentOS', tag: 'People', description: 'Performance cycles, development plans, and growth tracking.' },
    { name: 'CultureOS', tag: 'People', description: 'Pulse surveys and engagement insights tied to business outcomes.' }
  ],
  engineering: [
    { name: 'DevOS', tag: 'Engineering', description: 'Roadmap-to-release workflows, sprint health, and delivery insights.' },
    { name: 'IncidentOS', tag: 'Engineering', description: 'Incident lifecycle management and postmortem intelligence.' },
    { name: 'QualityOS', tag: 'Engineering', description: 'Quality gates, release confidence scoring, and test observability.' }
  ]
}

const activeModules = computed(() => modulesByTab[activeTab.value] || [])

const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>
