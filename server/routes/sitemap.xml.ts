export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = config.public.siteUrl?.replace(/\/$/, '') || 'https://infinityos.ai'
  const now = new Date().toISOString()

  const urls = ['/', '/privacy-policy', '/terms-and-conditions']

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((path) => {
      const changefreq = path === '/' ? 'weekly' : 'yearly'
      const priority = path === '/' ? '1.0' : '0.5'
      return `  <url><loc>${siteUrl}${path}</loc><lastmod>${now}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
    }),
    '</urlset>'
  ].join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return body
})
