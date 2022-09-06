/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(nextConfig) {
    nextConfig.module.rules.push(
      ...[
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ]
    );

    return nextConfig;
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

