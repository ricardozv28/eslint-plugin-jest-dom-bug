module.exports = {
  testMatch: ['**/__tests__/**/*.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
};
