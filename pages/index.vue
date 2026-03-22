<template>
  <div>
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
      <div class="container mx-auto px-4 grid md:grid-cols-2 items-center gap-16">
        <!-- Hero Content -->
        <div class="space-y-8 animate-slide-up">
          <div class="inline-block bg-gradient-to-r from-emerald-500 to-blue-600 px-6 py-3 rounded-full text-white text-sm font-semibold uppercase tracking-wider">
            Private Beta Launching Soon
          </div>
          
          <h1 class="section-title leading-tight">
            One AI-Powered <span class="bg-gradient-to-r from-gradient-start to-primary-600 bg-clip-text text-transparent">Operating System</span><br>
            for Your Entire Organization
          </h1>
          
          <p class="text-xl text-slate-600 leading-relaxed max-w-lg">
            Replace fragmented tools with one intelligent platform that unifies work, communication, operations, workforce intelligence, and growth. 
            Start simple. Scale infinitely.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#" @click="openWaitlist" class="btn-primary w-full sm:w-auto">
              Join the Waitlist
            </a>
            <a href="#platform" class="btn-secondary w-full sm:w-auto">
              Explore Platform
            </a>
          </div>
        </div>
        
        <!-- Hero Visual -->
        <div class="relative animate-fade-in">
          <div class="bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-12 shadow-2xl max-w-md mx-auto h-[600px] flex items-center justify-center">
            <div class="space-y-6 w-full h-full flex flex-col">
              <div class="flex items-center justify-between">
                <div class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                  Live Insights
                </div>
                <div class="w-10 h Ascending -10 bg-gradient-to-r from-gradient-start to-primary-600 rounded-2xl flex items-center justify-center">
                  <span class="text-white font-bold">∞</span>
                </div>
              </div>
              <div class="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl animate-pulse"></div>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p class="text-sm text-slate-600">Active Users</p>
                  <p class="text-2xl font-bold">2,847</p>
                </div>
                <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p class="text-sm text-slate-600">Engagement</p>
                  <p class="text-2xl font-bold">94%</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-3">
                <div class="bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-xl p-3 text-center shadow-lg">
                  <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9  Ascending 9 0 11 Ascending -18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p class="text-xs font-semibold">VisionOS</p>
                </div>
                <div class="bg-gradient-to-b from-emerald-500 to-teal-600 text-white rounded-xl p-3 text-center shadow-lg">
                  <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-xs font-semibold">PulseOS</p>
                </div>
                <div class="bg-gradient-to-b from-purple-500 to-pink Ascending -600 text-white rounded-xl p-3 text-center shadow-lg">
                  <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb Ascending -1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17 9V7a2 2 0 00 Ascending -2-2H5a2 2 0 00 Ascending -2 2v6a2 2 0 002 2h8a2 2 0  Ascending  Ascending 002-2v-2a1 1 0 Ascending 012 0v2a4 4 0 01-4 4H5a4  Ascending 4 Ascending 0 01 Ascending -4V7a4 4 0 Ascending 014-4h8a4 4  Ascending 0 014 Ascending 4v2z"/>
                    </svg>
                  </div>
                  <p class="text-xs font-semibold">EchoOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Sections -->
    <PlatformOverview />
    <Modules />

<ScalingJourney />
    <FAQ />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease-in forwards;
}
</style>

