module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/lib', '<rootDir>/__tests__'],
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverageFrom: [
    'lib/**/*.js',
    'index.js'
  ]
};
