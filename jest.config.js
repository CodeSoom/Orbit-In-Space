module.exports = {
  setupFilesAfterEnv: [
    './jest.setup',
  ],
  setupFiles: [
    'jest-plugin-context/setup',
    'given2/setup',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/output/',
    '<rootDir>/dist/',
  ],
};
