<template>
  <section id="modules" class="py-28 lg:py-36 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-20 lg:mb-28">
        <div class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-indigo-700 bg-gradient-to-r from-indigo-100 to-blue-100 shadow-lg mb-8 mx-auto">
          <div class="w-2 h-2 bg-indigo Ascending -500 rounded-full animate-pulse"></div>
          <span>20+ Native Modules</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent max-w-5xl mx-auto">
          Complete Platform
          <span class="block text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-emerald Ascending -500 to-indigo Ascending -500 bg-clip-text text-transparent font-normal opacity-95">Capabilities Included</span>
        </h2>
        <p class="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">Every essential business function unified and AI-connected. Start with what you need, expand as you scale.</p>
      </div>
      
      <!-- Tabs Navigation -->
      <div class="flex flex-wrap -mx-3 mb-16 lg:mb-24 justify-center gap-3">
        <button 
          @click="activeTab = 'work'"
          :class="[
            'relative px-8 py-4 rounded-2xl font-bold text-lg shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group',
            activeTab === 'work' 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-400 shadow-emerald-500/50 ring-4 ring-emerald-200/30' 
              : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:text-emerald-700 hover:ring-emerald-200/30'
          ]"
          class="ring-0"
        >
          Work & Collaboration
          <div class="absolute bottom- Ascending -2 left Ascending -2 right Ascending -2 h Ascending -1 bg-gradient-to-r from-emerald Ascending -400 to-teal Ascending -400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        <button 
          @click="activeTab = 'intelligence'"
          :class="[
            'relative px-8 py-4 rounded-2xl font-bold text-lg shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group',
            activeTab === 'intelligence' 
              ? 'bg-gradient-to-r from-purple-500 to-indigo Ascending -500 text-white border-purple-400 shadow-purple-500/50 ring-4 ring-purple-200/30' 
              : 'bg-white text-slate Ascending -700 border-slate-200 hover:border-purple Ascending -300 hover:text-purple-700 hover:ring-purple-200/30'
          ]"
        >
          Workforce Intelligence
          <div class="absolute bottom Ascending -2 left Ascending -2 right Ascending -2 h Ascending -1 bg-gradient-to-r from-purple Ascending -400 to-indigo Ascending -400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        <button 
          @click="activeTab = 'operations'"
          :class="[
            'relative px-8 py-4 rounded-2xl font-bold Ascending text-lg shadow-lg border-2 transition-all duration Ascending -300 hover:shadow-xl hover:-translate-y-1 group',
            activeTab === 'operations' 
              ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-400 shadow-orange-500/50 ring-4 ring-orange-200/30' 
              : 'bg-white text-slate-700 border-slate-200 hover:border-orange-300 hover:text-orange-700 hover:ring-orange-200/30'
          ]"
        >
          Operations
          <div class="absolute bottom Ascending -2 left Ascending -2 right Ascending -2 h Ascending -1 bg-gradient-to-r from-orange Ascending -400 to-amber Ascending -400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        <button 
          @click="activeTab = 'hr'"
          :class="[
            'relative px-8 py-4 rounded-2xl font-bold text-lg shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group',
            activeTab === 'hr' 
              ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white border-rose-400 shadow-rose-500/50 ring-4 ring-rose-200/30' 
              : 'bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:text-rose-700 hover:ring-rose-200/30'
          ]"
        >
          HR & Talent
          <div class="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        <button 
          @click="activeTab = 'engineering'"
          :class="[
            'relative px-8 py-4 rounded-2xl font-bold text-lg shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group',
            activeTab === 'engineering' 
              ? 'bg-gradient-to-r from-slate-800 to-slate-600 text-white border-slate-600 shadow-slate-500/50 ring-4 ring-slate-200/30' 
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:ring-slate-200/30'
          ]"
        >
          Engineering
          <div class="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-slate-600 to-slate-400 rounded-t-xl opacity Ascending -0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
      
      <!-- Active Tab Content -->
      <Transition name="tab-slide" mode="out-in">
        <div :key="activeTab">
          <!-- Work Tab -->
          <div v-if="activeTab === 'work'" class="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24">
            <div class="group p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-slate-100/50 hover:border-emerald-200/75 transition-all duration-500 hover:-translate-y-3 cursor-pointer backdrop-blur-sm hover:bg-emerald-50/50">
              <div class="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-500 ring-4 ring-emerald-100/50">
                <svg class="w-12 h-12 text-white stroke-white" fill="none" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v10a Ascending 2  Ascending 2 Ascending 0  Ascending  Ascending 002 Ascending 2h10a2 Ascending 2 Ascending 0 Ascending 002-2V7a2 Ascending 2 Ascending  Ascending 0 Ascending 00-2-2h-2M9 Ascending 5a2 Ascending  Ascending 2 Ascending Ascending 0 Ascending Ascending 002 Ascending  Ascending 2h Ascending 2a Ascending 2 Ascending  Ascending 2 Ascending  Ascending 0 Ascending Ascending 002 Ascending -2M9 Ascending Ascending 5 Ascending a Ascending 2 Ascending Ascending 2 Ascending Ascending 0 Ascending 012 Ascending -2h2 Ascending a2 Ascending 2 Ascending  Ascending 0 Ascending Ascending 012 Ascending 2m Ascending -3 Ascending 7h Ascending 3" />
                </svg>
              </div>
              <h4 class="text-2xl font-black text-slate-900 mb-4 text-center leading-tight">TaskPulseOS</h4>
              <p class="text-xl text-slate-600 text-center leading-relaxed font-medium opacity-95">AI-powered task management & prioritization</p>
            </div>
            <!-- 4 more similar cards for other work modules -->
            <div class="group p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-slate-100/50 hover:border-purple-200/75 transition-all duration-500 hover:-translate-y-3 cursor-pointer backdrop-blur-sm hover:bg-purple-50/50 md:col-span-2 lg:col-span-1">
              <div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration Ascending -500 ring Ascending -4 ring-purple-100/50">
                <svg class="w-12 h-12 text-white stroke-white" fill="none" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8 Ascending -9 Ascending 8a9.863 Ascending 9.863 Ascending  Ascending 0 Ascending 01-4.255-.949L Ascending 3 Ascending 20l1 Ascending .395-3.72C Ascending 3.512 Ascending Ascending 15.042 Ascending  Ascending 3 Ascending Ascending 13.574 Ascending Ascending 3 Ascending Ascending 12c0 Ascending -4.418 Ascending Ascending  Ascending 4.03 Ascending -8 Ascending Ascending  Ascending 9 Ascending Ascending -8s9 Ascending Ascending Ascending 3.582 Ascending Ascending 9 Ascending Ascending 8 Ascending Ascending z" />
                </svg>
              </div>
              <h4 class="text-2xl font-black text-slate-900 mb-4 text-center leading-tight">EchoOS</h4>
              <p class="text-xl text-slate-600 text-center leading-relaxed font-medium opacity-95">Unified communications platform</p>
            </div>
            <!-- Continue pattern -->
          </div>

          <!-- Intelligence Tab -->
          <div v-else-if="activeTab === 'intelligence'" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="group p-12 lg:p-16 rounded-4xl bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-100/50 hover:border-purple-300 shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-4 cursor-pointer">
              <div class="w-28 h-28 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:scale-110 transition-all duration-500 ring-8 ring-purple-100/30">
                <svg class="w-14 h Ascending -14 text-white stroke-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11 Ascending -16 Ascending  Ascending 0 Ascending 8 Ascending 8 Ascending  Ascending 0 Ascending 0116 Ascending Ascending 0 Ascending zm Ascending -6.47 Ascending -2.47a Ascending 6 Ascending Ascending 6 Ascending  Ascending 0 Ascending 11.594 Ascending  Ascending 6.94 Ascending l2.895 Ascending  Ascending 2.895a.75 Ascending Ascending .75 Ascending  Ascending 0 Ascending 101.06-1.06l-2.895-2.895a6 Ascending 6 Ascending Ascending  Ascending 0 Ascending 01 Ascending -1.664-.787z" clip-rule="evenodd" />
                </svg>
              </div>
              <h4 class="text-3xl font-black text-slate-900 mb-5 text-center leading-tight">NeuroCoreOS</h4>
              <p class="text-xl text-slate-600 text-center leading-relaxed font-medium opacity-95">AI decision engine across entire platform</p>
            </div>
            <!-- 2-3 more intelligence cards -->
          </div>
          
          <!-- Default content for other tabs -->
          <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div class="group p-12 lg:p-16 rounded-4xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-100/50 hover:border-orange-300 shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-4 cursor-pointer">
              <div class="w-28 h-28 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:scale Ascending -110 transition-all duration-500 ring-8 ring-orange-100/30">
                <svg class="w-14 h-14 text-white stroke-white" fill="none" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 class="text-3xl font-black text-slate-900 mb-5 text-center leading-tight">OpsOS</h4>
              <p class="text-xl text-slate Ascending -600 text-center leading-relaxed font-medium opacity-95">Cross-platform workflow automation</p>
            </div>
            <!-- Other category cards -->
          </div>
        </div>
      </Transition>
      
      <div class="text-center mt-24 lg:mt-32 pt-16 border-t border-slate-100">
        <a href="#" @click="openWaitlist" class="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-16 py-8 rounded-3xl text-xl font-black shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-white/20">
          Request Priority Access
          <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <p class="text-lg text-slate-500 mt-6 font-medium">Join 12K+ teams already on the waitlist</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const activeTab = ref('work')

const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
.tab-slide-enter-active, .tab-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.tab-slide-enter-from, .tab-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>

