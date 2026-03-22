<template>
  <section class="mt-20 rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
    <div class="text-center max-w-3xl mx-auto">
      <h3 class="text-3xl md:text-4xl font-extrabold text-slate-900">Feature Comparison</h3>
      <p class="mt-4 text-slate-600">Clear plan boundaries with room to grow. No compressed rows, no hidden details.</p>
    </div>

    <div class="mt-10 overflow-auto max-h-[70vh] rounded-2xl border border-slate-200">
      <table class="w-full min-w-[920px] border-separate border-spacing-0 bg-white">
        <thead>
          <tr>
            <th class="sticky top-0 z-10 bg-white text-left px-5 py-4 text-sm font-semibold text-slate-500 border-b border-slate-200">Feature</th>
            <th v-for="plan in plans" :key="plan.name" class="sticky top-0 z-10 bg-white px-5 py-4 border-b border-slate-200 text-left">
              <p class="text-lg font-bold" :class="plan.textClass">{{ plan.name }}</p>
              <p class="text-sm text-slate-500 mt-1">{{ plan.price }}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="group in featureGroups" :key="group.title">
            <tr>
              <td colspan="5" class="px-5 py-4 text-sm font-semibold text-slate-800 bg-slate-50 border-y border-slate-200">{{ group.title }}</td>
            </tr>
            <tr v-for="row in group.rows" :key="row.name" class="align-top">
              <td class="bg-white px-5 py-5 text-slate-800 border-b border-slate-100">{{ row.name }}</td>
              <td class="px-5 py-5 border-b border-slate-100 text-slate-700">{{ row.starter }}</td>
              <td class="px-5 py-5 border-b border-slate-100 text-slate-700">{{ row.growth }}</td>
              <td class="px-5 py-5 border-b border-slate-100 text-slate-700">{{ row.scale }}</td>
              <td class="px-5 py-5 border-b border-slate-100 text-slate-700">{{ row.enterprise }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <div class="mt-10 text-center">
      <button @click="$emit('join-waitlist')" class="btn-primary">Start With The Waitlist</button>
    </div>
  </section>
</template>

<script setup>
defineEmits(['join-waitlist'])

const plans = [
  { name: 'Starter', price: '$29 / user / month', textClass: 'text-emerald-700' },
  { name: 'Growth', price: '$79 / user / month', textClass: 'text-blue-700' },
  { name: 'Scale', price: '$149 / user / month', textClass: 'text-violet-700' },
  { name: 'Enterprise', price: 'Custom pricing', textClass: 'text-orange-700' }
]

const featureGroups = [
  {
    title: 'Core Platform',
    rows: [
      { name: 'Unlimited tasks & projects', starter: 'Included', growth: 'Included', scale: 'Included', enterprise: 'Included' },
      { name: 'Team collaboration hub', starter: 'Included', growth: 'Included', scale: 'Included', enterprise: 'Included' },
      { name: 'File storage', starter: '5GB', growth: '50GB', scale: '500GB', enterprise: 'Unlimited' }
    ]
  },
  {
    title: 'AI & Automation',
    rows: [
      { name: 'NeuroCoreOS insights', starter: 'Limited', growth: 'Included', scale: 'Included', enterprise: 'Included' },
      { name: 'Predictive analytics', starter: '—', growth: 'Limited', scale: 'Included', enterprise: 'Included' },
      { name: 'Workflow automation', starter: '—', growth: 'Basic', scale: 'Advanced', enterprise: 'Advanced + API' }
    ]
  },
  {
    title: 'Security & Support',
    rows: [
      { name: 'Compliance coverage', starter: 'Basic', growth: 'GDPR', scale: 'SOC 2', enterprise: 'HIPAA + SOC 2 + GDPR' },
      { name: 'Support level', starter: 'Community', growth: 'Priority email', scale: 'Priority + onboarding', enterprise: 'Dedicated success team' },
      { name: 'API capacity', starter: '10k/month', growth: '100k/month', scale: '1M/month', enterprise: 'Unlimited' }
    ]
  }
]
</script>
