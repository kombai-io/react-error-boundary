module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          safari: "12",
        },
      },
    ],
  ],
};
