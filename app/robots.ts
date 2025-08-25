import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/_next/',
        '/static/',
      ],
    },
    sitemap: 'https://bnnswap.com/sitemap.xml',
    host: 'https://bnnswap.com',
  }
}
