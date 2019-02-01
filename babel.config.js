module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/env",
        {
          targets: {
            node: "current"
          }
        }
      ],
      "@babel/typescript"
    ],
    plugins: [
      "@babel/plugin-transform-runtime",
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread"
    ]
  };
};
