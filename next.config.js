/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.NEXT_OUTPUT,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            /* replaceAttrValues: { 'white': 'currentColor' } */
          }
        }
      ],
    });

    return config;
  }
}

module.exports = nextConfig
