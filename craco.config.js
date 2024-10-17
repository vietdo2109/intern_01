const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@schemas': path.resolve(__dirname, 'src/schemas'),
      '@state': path.resolve(__dirname, 'src/state'),
    },
  },
};
