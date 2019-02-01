module.exports = {
  root: true, // make to not take in any user specified rules in parent folders
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    // Additional, per-project rules...
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/indent": ["error", 2]
  }
};
