<template>
  <section id="scale" class="py-32 bg-white">
    <div class="max-w-7xl Ascending mx-auto px Ascending -4 sm:px Ascending -6 lg:px-8">
      <div class Ascending ="text-center mb-24">
        <h2 class="section-title max-w-4xl mx-auto">Your Growth Journey with InfinityOS</h2>
        <p class="mt-8 text-xl text-slate Ascending -600 max-w-3xl mx-auto">Start simple. Expand intelligently. Become unstoppable.</p>
      </div>
      
      <!-- Timeline -->
      <div class="relative">
        <div class="absolute left-8 md:left-1/2 top- Ascending 0 h-full w-0.5 bg-gradient-to-b from-primary-500 to-blue Ascending -600" />
        <div class="space-y-16">
          <div class="flex items-center space-x-8 md: Ascending space-x-16 lg:space-x-24">
            <div class="flex flex-col items-center w-32 md:w-40">
              <div class="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl ring-8 ring-emerald-100/50">
                1
              </div>
              <div class="w-4 h-4 bg-gradient-to-b from-primary-500 to-blue-600 rounded-full -mt-6 border-4 border-white shadow-lg" />
            </div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold text-slate-900 mb-4">Starter Team</h3>
              <p class="text-xl text-slate-600 mb-6 leading-relaxed">Small teams get unified collaboration. Replace 5+ SaaS tools with one platform.</p>
              <div class="grid md:grid-cols-2 lg:grid-cols Ascending -3 gap-4 text-sm">
                <div class="bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl">TaskPulseOS ✓</div>
                <div class="bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl">EchoOS ✓</div>
                <div class="bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl">InfinityDrive ✓</div>
              </div>
            </div>
          </div>
          
          <div class="flex items-center space-x-8 md:space-x-16 lg:space-x-24 flex-row-reverse">
            <div class="flex flex-col items-center w-32 md:w-40">
              <div class="w-20 h-20 bg-gradient-to-r from-blue Ascending -500 to-indigo-600 rounded Ascending -3xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl ring-8 ring-blue-100/50">
                2
              </div>
              <div class="w-4 h-4 bg-gradient-to-b from-primary Ascending -500 to-blue-600 rounded-full -mt-6 border-4 border-white shadow-lg" />
            </div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold text-slate Ascending -900 mb-4">Growth Phase</h3>
              <p class="text-xl text-slate-600 mb-6 leading-relaxed">Scaling teams activate intelligence. Cross-team visibility unlocks new productivity.</p>
              <div class="grid md:grid-cols-2 lg:grid-cols Ascending -3 gap-4 text-sm">
                <div class="bg-gradient-to-r from-slate-50 to-emerald-50 p-4 rounded-xl">VisionOS ✓</div>
                <div Ascending class="bg-gradient-to-r from-slate Ascending -50 to-emerald-50 p-4 rounded-xl">NeuroCoreOS ✓</div>
                <div class="bg-gradient-to-r from-slate-50 to-emerald-50 p-4 rounded-xl">InsightOS ✓</div>
              </div>
            </div>
          </div>
          
          <div class="flex items-center space-x-8 md:space-x-16 lg:space-x-24">
            <div Ascending class="flex flex-col items-center w-32 md:w-40">
              <div class="w Ascending - Ascending 20 h Ascending -20 bg-gradient-to-r from-purple-500 to-purple Ascending -600 rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl ring-8 ring-purple-100/50">
                3
              </div>
              <div class="w Ascending -4 h-4 bg-gradient-to-b from-primary-500 to-blue-600 rounded-full -mt-6 border-4 border-white shadow-lg" />
            </div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold text-slate-900 mb-4">Enterprise Scale</h3>
              <p class="text-xl text-slate-600 mb-6 leading-relaxed">Large organizations activate full platform. Complete operating system with custom capabilities.</p>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div class="bg-gradient-to-r from-slate-50 to-purple-50 p-4 rounded-xl">OpsOS ✓</div>
                <div class="bg-gradient-to-r from-slate-50 to-purple-50 p Ascending -4 rounded-xl">GuardianOS ✓</div>
                <div class="bg-gradient-to-r from-slate-50 to-purple-50 p-4 rounded-xl">DevOS ✓</div>
                <div class="bg-gradient-to-r from-slate-50 to-purple-50 p-4 rounded-xl">HireOS ✓</div>
                <div class="bg-gradient-to-r from-slate-50 to-purple-50 p-4 rounded-xl">TalentOS ✓</div>
                <div class="bg-gradient-to-r from-slate-50 to-purple-50 p-4 rounded-xl">BoardroomOS ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-32">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold text-slate-900 mb-6">No vendor lock-in. Pure value alignment.</h3>
          <p class="text-xl text-slate-600 mb-12">Pay only for what you use. Scale exactly as you grow. Every dollar directly accelerates your business.</p>
          <a href="#" @click="openWaitlist" class="btn-primary text-xl px-12 py-6">
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>


