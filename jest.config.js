// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: "jsdom",
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  moduleFileExtensions: ["ts", "jsx", "tsx", "js"],

  transform: { '^.+\\.tsx?$': 'ts-jest' },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  modulePathIgnorePatterns: ["/node_modules/$1"],

  testMatch: [
    '**/test/*.spec.(ts|js|jsx|tsx)|**/__tests__/*.(ts|js|jsx|tsx)'
  ],

  preset: 'ts-jest',
};
