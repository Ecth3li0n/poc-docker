const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'scss', 'utils')],
  },
};

module.exports = nextConfig;
