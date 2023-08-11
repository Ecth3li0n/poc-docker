const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpackDevMiddleware: (config) => {
    // Activer le polling
    config.watchOptions = {
      poll: 1000, // Vérifier les modifications toutes les secondes
      aggregateTimeout: 300, // Regrouper plusieurs modifications en une seule recompilation (attendre jusqu'à 300ms)
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'scss', 'utils')],
  },
};

module.exports = nextConfig;
