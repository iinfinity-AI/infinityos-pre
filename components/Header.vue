<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/#hero" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-gradient-start to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">∞</span>
            </div>
            <span class="text-lg md:text-2xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-primary-600 bg-clip-text text-transparent">InfinityOS</span>
          </NuxtLink>
        </div>
        
        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NuxtLink to="/#platform" class="text-sm lg:text-base font-medium text-slate-700 hover:text-primary-600 transition-colors">Platform</NuxtLink>
          <NuxtLink to="/#modules" class="text-sm lg:text-base font-medium text-slate-700 hover:text-primary-600 transition-colors">Modules</NuxtLink>
          <NuxtLink to="/#pricing" class="text-sm lg:text-base font-medium text-slate-700 hover:text-primary-600 transition-colors">Pricing</NuxtLink>
          <NuxtLink to="/#scale" class="text-sm lg:text-base font-medium text-slate-700 hover:text-primary-600 transition-colors">Scale</NuxtLink>
          <NuxtLink to="/#faq" class="text-sm lg:text-base font-medium text-slate-700 hover:text-primary-600 transition-colors">FAQ</NuxtLink>
        </div>
        
        <!-- CTA -->
        <div class="hidden md:block">
          <a href="#" @click.prevent="openWaitlist" class="btn-primary">
            Join Waitlist
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileOpen = !mobileOpen" class="p-2 rounded-lg hover:bg-slate-100">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileOpen" class="md:hidden py-4 border-t border-slate-200">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink to="/#platform" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Platform</NuxtLink>
          <NuxtLink to="/#modules" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Modules</NuxtLink>
          <NuxtLink to="/#pricing" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Pricing</NuxtLink>
          <NuxtLink to="/#scale" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Scale</NuxtLink>
          <NuxtLink to="/#faq" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">FAQ</NuxtLink>
          <NuxtLink to="/privacy-policy" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms-and-conditions" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Terms & Conditions</NuxtLink>
          <a href="#" @click.prevent="openWaitlist" class="block px-3 py-2 text-sm font-semibold bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200">Join Waitlist</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileOpen = ref(false)
const config = useRuntimeConfig()

const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>
