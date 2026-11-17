import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  // Lesarts was renamed Nasirian Gallery: keep the old project URLs working
  async redirects() {
    return [
      { source: '/:locale(fr|en)/projects/lesarts', destination: '/:locale/projects/nasirian', statusCode: 301 },
      { source: '/projects/lesarts', destination: '/fr/projects/nasirian', statusCode: 301 },
    ]
  },
  experimental: {
    optimizePackageImports: ['gsap', 'three', '@react-three/drei', 'swiper'],
    globalNotFound: true,
  },
  // Compression
  compress: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80],
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
      {
        pathname: '/images/asbl_ovni/**',
        search: '?v=2',
      },
    ],
  },
  // Production optimizations
  poweredByHeader: false,
};

export default nextConfig;
