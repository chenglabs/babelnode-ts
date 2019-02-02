// jest.config.js
module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.test\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ]
};
