/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'export',

  reactStrictMode: false,

  env: {
    BASE_URL: process.env.BASE_URL,
  },

  webpack(config) {
    //alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/*': './src/*',
    };

    //svg
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
