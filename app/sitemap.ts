import { MetadataRoute } from 'next'
import { projects } from '@/constants'
import { locales } from '@/i18n'

export const dynamic = 'force-static'

const baseUrl = 'https://www.olivervdb.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    ...projects.en.map(({ slug }) => ({ path: `/projects/${slug}`, priority: 0.8 })),
  ]

  return pages.flatMap(({ path, priority }) =>
    locales.map(lang => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map(l => [l, `${baseUrl}/${l}${path}`])),
      },
    }))
  )
}
