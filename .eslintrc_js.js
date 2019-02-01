module.exports = {
  parser: "babel-eslint",
  extends: ["prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    // Additional, per-project rules...
  }
};
