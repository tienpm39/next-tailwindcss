const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [],
  },
  i18n,
};

module.exports = nextConfig;
