const withTM = require("next-transpile-modules")(["react-markdown"]);

module.exports = withTM({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  outDir: ".next",
});
