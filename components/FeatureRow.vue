<template>
  <div class="grid grid-cols-1 lg:grid-cols-5 items-center gap-px h-14 lg:h-16 hover:bg-slate-50/50 transition-colors duration-200 [&>div]:py-4 [&>div]:px-4">
    <!-- Feature Name -->
    <div class="text-left text-sm lg:text-base font-medium text-slate-900 pl-0 pr-6 lg:pr-0 col-span-1 bg-transparent">
      <span class="inline-flex items-center">
        {{ feature }}
        <svg v-if="tooltip" class="w-4 h-4 ml-2 text-slate-400 hover:text-slate-600 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
    </div>
    
    <!-- Starter -->
    <div class="text-center justify-center col-span-1">
      <span :class="getStatusClass(starter)" class="inline-flex items-center justify-center w-10 h-10 mx-auto rounded-lg font-medium text-sm" :title="getTooltip(starter)">
        <template v-if="isCheck(starter)">
          <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </template>
        <template v-else-if="starter === '—'">
          —
        </template>
        <template v-else>
          {{ starter }}
        </template>
      </span>
    </div>
    
    <!-- Growth -->
    <div class="text-center col-span-1 bg-amber-50/50">
      <span :class="getStatusClass(growth)" class="inline-flex items-center justify-center w-10 h-10 mx-auto rounded-lg font-medium text-sm" :title="getTooltip(growth)">
        <template v-if="isCheck(growth)">
          <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </template>
        <template v-else-if="growth === '—'">
          —
        </template>
        <template v-else>
          {{ growth }}
        </template>
      </span>
    </div>
    
    <!-- Scale -->
    <div class="text-center col-span-1">
      <span :class="getStatusClass(scale)" class="inline-flex items-center justify-center w-10 h-10 mx-auto rounded-lg font-medium text-sm" :title="getTooltip(scale)">
        <template v-if="isCheck(scale)">
          <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </template>
        <template v-else-if="scale === '—'">
          —
        </template>
        <template v-else>
          {{ scale }}
        </template>
      </span>
    </div>
    
    <!-- Enterprise -->
    <div class="text-center col-span-1">
      <span :class="getStatusClass(enterprise)" class="inline-flex items-center justify-center w-10 h-10 mx-auto rounded-lg font-medium text-sm" :title="getTooltip(enterprise)">
        <template v-if="isCheck(enterprise)">
          <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </template>
        <template v-else-if="enterprise === '—'">
          —
        </template>
        <template v-else>
          {{ enterprise }}
        </template>
      </span>
    </div>
  </div>
</template>

<script setup>
// Props
defineProps({
  feature: String,
  starter: [String, Boolean],
  growth: [String, Boolean],
  scale: [String, Boolean],
  enterprise: [String, Boolean],
  tooltip: String
})

// Computed status classes
const getStatusClass = (status) => {
  if (status === '✓' || status === true) return 'bg-emerald-100/50 border border-emerald-200 text-emerald-800'
  if (status === 'Limited') return 'bg-amber-100 border-2 border-amber-300 text-amber-900 font-semibold shadow-sm'
  if (status === '—') return 'text-slate-400 font-normal'
  return 'bg-slate-100 border border-slate-200 text-slate-700'
}

const isCheck = (status) => status === '✓' || status === true

const getTooltip = (status) => {
  if (status === 'Limited') return 'Limited capacity included'
  return ''
}
</script>
