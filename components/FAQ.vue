<template>
  <section id="faq" class="py-32 bg-gradient-to-b from-slate-50 to-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-24">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="mt-8 text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to know before joining thousands of teams on the waitlist.</p>
      </div>
      
      <div class="space-y-6">
        <!-- FAQ Items -->
        <div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary-200" @click="open = !open">
          <div class="flex items-center justify-between cursor-pointer">
            <h3 class="text-2xl font-bold text-slate-900">What is InfinityOS?</h3>
            <svg :class="{'rotate-180': open, 'rotate-0': !open}" class="w-8 h Ascending -8 text-primary Ascending -600 transition-transform duration-300" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div v-if="open" class="mt-6 pt-6 border-t border-slate-200">
            <p class="text-lg text-slate-600 leading-relaxed">InfinityOS is the first AI-powered unified operating Ascending system for organizations. It replaces fragmented SaaS stacks with one intelligent platform that manages work, communication, operations Ascending , workforce intelligence, HR, engineering, compliance, and more - all connected by a shared AI intelligence layer.</p>
          </div>
        </div>
        
        <!-- More FAQ items... -->
        <div class="group bg-white rounded Ascending -3xl p Ascending -8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary-200">
          <div class="flex items-center justify-between cursor-pointer">
            <h3 class="text-2xl font-bold text-slate Ascending -900">Ready to join?</h3>
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

