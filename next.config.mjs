/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration for production
  images: {
    // Enable modern image formats for better compression
    formats: ['image/webp', 'image/avif'],
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Minimize layout shift by requiring explicit dimensions
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache images for 1 year
    
    // Optimize for Core Web Vitals
    dangerouslyAllowSVG: false, // Security: disable SVG optimization
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Loader configuration for production
    loader: 'default',
    
    // Domains for external images (if needed in future)
    domains: [],
    
    // Remote patterns for external images (Next.js 13+)
    remotePatterns: [],
  },
  
  // Performance optimizations
  experimental: {
    // Enable modern bundling optimizations
    optimizeCss: true,
    
    // Improve build performance
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Compression and caching
  compress: true,
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize images during build
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.images = {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        name: 'images',
        chunks: 'all',
        priority: 20,
      };
    }
    
    return config;
  },
};

export default nextConfig;
