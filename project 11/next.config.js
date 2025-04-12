/** @type {import("next").NextConfig} */
const config = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    config.stats = "verbose";
    return config;
  },
  // Add output configuration for static exports if needed
  output: process.env.EXPORT_MODE === 'static' ? 'export' : undefined,
};
export default config;
