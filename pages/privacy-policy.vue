<template>
  <section class="py-20 md:py-24">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p class="mt-3 text-sm md:text-base text-slate-500">Last updated: March 22, 2026</p>
      <p class="mt-6 text-slate-700 leading-relaxed">
        This Privacy Policy describes how InfinityOS collects, uses, discloses, and safeguards personal data in connection
        with our websites, applications, APIs, and related services (collectively, the "Services"). It also explains
        individual rights and choices regarding personal data.
      </p>

      <div class="mt-10 space-y-10 text-slate-700 leading-relaxed">
        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">1. Scope and Roles</h2>
          <p class="mt-3">InfinityOS may act as a controller for business contact and account data, and as a processor or service provider when processing customer-submitted data under customer instructions. Where InfinityOS acts as a processor, data processing terms in the applicable agreement govern such processing. This Policy is intended to align with the legal framework of the Democratic Socialist Republic of Sri Lanka, including the Personal Data Protection Act, No. 9 of 2022 (\"Sri Lanka PDPA\"), as and when applicable provisions are in force.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">2. Categories of Data We Collect</h2>
          <p class="mt-3">We collect information directly from users, from customer administrators, and automatically through use of the Services. Categories include: identity and contact details, account credentials and security events, device and usage telemetry, support communications, billing and transaction details, and customer content submitted to the platform.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">3. Legal Bases for Processing</h2>
          <p class="mt-3">Where required by law, we process personal data based on one or more legal bases: performance of a contract, legitimate interests (for security, product operations, and service improvement), legal compliance obligations, and consent where applicable. For Sri Lanka-based data subjects and processing activities subject to the Sri Lanka PDPA, InfinityOS seeks to process personal data on lawful grounds recognized under that Act and related implementing regulations.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">4. How We Use Personal Data</h2>
          <p class="mt-3">We use personal data to provide and maintain the Services; authenticate users; secure systems; prevent fraud and abuse; process transactions; provide customer support; communicate product and policy updates; and perform analytics to improve product functionality, reliability, and user experience.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">5. AI and Automated Processing</h2>
          <p class="mt-3">InfinityOS may use automated systems and AI-assisted processing to deliver features such as recommendations, classification, summarization, and workflow optimization. Such processing is designed to support operational decision-making and may require human review depending on customer configuration and regulatory context.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">6. Cookies and Similar Technologies</h2>
          <p class="mt-3">We use essential cookies and similar technologies for session management, security, and service functionality. Where legally required, we request consent for non-essential analytics or preference technologies and provide relevant controls.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">7. Sharing and Disclosure</h2>
          <p class="mt-3">We do not sell personal information. We may disclose personal data to: (a) service providers and subprocessors under contractual confidentiality and security obligations; (b) professional advisors; (c) competent authorities where required by law; and (d) relevant parties in connection with a merger, acquisition, or corporate reorganization subject to appropriate safeguards.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">8. International Transfers</h2>
          <p class="mt-3">Where personal data is transferred across borders, InfinityOS uses legally recognized transfer mechanisms and supplementary safeguards appropriate to the destination jurisdiction and data sensitivity. For processing subject to Sri Lanka law, cross-border transfers are handled in a manner intended to satisfy Sri Lanka PDPA transfer requirements, including contractual protections and risk-based safeguards.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">9. Data Security Measures</h2>
          <p class="mt-3">We maintain administrative, technical, and organizational safeguards designed to protect personal data against unauthorized access, loss, misuse, or alteration. These include access controls, encryption in transit, monitoring, and incident response processes aligned with risk.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">10. Retention and Deletion</h2>
          <p class="mt-3">We retain personal data only as long as necessary for business and legal purposes, including contractual commitments, legitimate business operations, dispute resolution, and compliance obligations. Data is deleted or de-identified when no longer required, subject to lawful exceptions.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">11. Individual Rights and Choices</h2>
          <p class="mt-3">Depending on applicable law, individuals may have rights to access, correct, delete, restrict, object to processing, data portability, and withdraw consent. For Sri Lanka data subjects, InfinityOS intends to honor data subject rights provided under the Sri Lanka PDPA, subject to statutory limitations and exemptions. To exercise rights, contact us using the details below. We may verify identity before processing requests and may deny requests where legally permitted.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">12. Children's Privacy</h2>
          <p class="mt-3">The Services are intended for business use and are not directed to children. We do not knowingly collect personal data from children where prohibited by law.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">13. Updates to This Policy</h2>
          <p class="mt-3">We may revise this Privacy Policy from time to time. If material changes are made, we will publish an updated version with a revised effective date and provide additional notice where required by law.</p>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900">14. Contact and Complaints</h2>
          <p class="mt-3">For privacy inquiries, rights requests, or complaints, contact <a href="mailto:legal@iinfinityai.com" class="text-primary-600 hover:underline">legal@iinfinityai.com</a>. Where applicable, you may also have the right to lodge a complaint with the competent data protection regulator in Sri Lanka or another supervisory authority in your jurisdiction.</p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const normalizedSiteUrl = computed(() => config.public.siteUrl.replace(/\/$/, ''))
const canonicalUrl = computed(() => `${normalizedSiteUrl.value}${route.path}`)
const ogImage = computed(() => `${normalizedSiteUrl.value}/og-infinityos.svg`)

useSeoMeta({
  title: 'Privacy Policy',
  description: 'Read InfinityOS privacy policy covering data collection, legal bases, security safeguards, transfers, retention, and user rights.',
  ogTitle: 'InfinityOS Privacy Policy',
  ogDescription: 'How InfinityOS handles personal data and privacy obligations.',
  ogUrl: () => canonicalUrl.value,
  ogImage: () => ogImage.value,
  twitterTitle: 'InfinityOS Privacy Policy',
  twitterDescription: 'Privacy practices for InfinityOS services.',
  twitterImage: () => ogImage.value
})
</script>
