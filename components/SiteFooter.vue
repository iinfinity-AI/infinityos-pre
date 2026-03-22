<template>
  <footer class="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-14">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white">
              IO
            </div>
            <span class="text-xl font-bold text-white">InfinityOS</span>
          </div>
          <p class="mt-4 text-slate-400 leading-relaxed max-w-xs">
            AI-powered operating system for modern teams, built to scale from startup to enterprise.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-300">Product</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li><NuxtLink to="/#platform" class="hover:text-white">Platform</NuxtLink></li>
            <li><NuxtLink to="/#modules" class="hover:text-white">Modules</NuxtLink></li>
            <li><NuxtLink to="/#pricing" class="hover:text-white">Pricing</NuxtLink></li>
            <li><NuxtLink to="/#faq" class="hover:text-white">FAQ</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-300">Company</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li><a href="#" @click.prevent="openWaitlist" class="hover:text-white">Join Waitlist</a></li>
            <li><a href="mailto:hello@infinityos.ai" class="hover:text-white">Contact</a></li>
            <li><NuxtLink to="/terms-and-conditions" class="hover:text-white">Terms & Conditions</NuxtLink></li>
            <li><NuxtLink to="/privacy-policy" class="hover:text-white">Privacy Policy</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-300">Updates</h3>
          <p class="mt-4 text-sm text-slate-400">Get product updates and early access announcements.</p>
          <a
            href="#"
            @click.prevent="openWaitlist"
            class="mt-4 inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Subscribe via Waitlist
          </a>
        </div>
      </div>

      <div class="mt-12 border-t border-slate-800 pt-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-slate-500">
        <p>(c) {{ year }} InfinityOS. All rights reserved.</p>
        <p>Built for secure, responsible AI operations.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig()
const year = new Date().getFullYear()

const openWaitlist = () => {
  window.open(config.public.waitlistUrl, '_blank', 'noopener,noreferrer')
}
</script>
