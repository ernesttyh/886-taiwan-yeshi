import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536, 1920],
  },
  async redirects() {
    return [
      // The old site's contact page
      { source: "/contact", destination: "/find-us", permanent: true },
      // Trailing-slash and legacy variants people may have bookmarked
      { source: "/about", destination: "/#our-story", permanent: true },
      // Pages from the previous site
      { source: "/our-story", destination: "/#our-story", permanent: true },
      { source: "/reservations", destination: "/find-us", permanent: true },
      { source: "/reservation", destination: "/find-us", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
