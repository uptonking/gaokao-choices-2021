const baseConfig = require('../../config/jest.base');
const pkgConfig = {
  displayName: 'gaokao-choices-2021',
  rootDir: '../..',
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
};

module.exports = {
  ...baseConfig,
  ...pkgConfig,
};
