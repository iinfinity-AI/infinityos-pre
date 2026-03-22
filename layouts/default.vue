<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <!-- Header -->
    <Header />
    
    <!-- Main content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer CTA -->
    <footer class="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 mt-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="section-title text-white mb-8">Ready to transform your organization?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Join thousands of teams building the future of work with InfinityOS.</p>
        <a href="#" @click="openWaitlist" class="btn-primary inline-block">
          Join the Waitlist
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Composables
const config = useRuntimeConfig()
const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>


