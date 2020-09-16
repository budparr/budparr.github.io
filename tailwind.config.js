module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true,
    mode: "all",
    content: ["./eleventy/layouts/*.11ty.js", "./eleventy/layouts/**/*.js"],
  },
  theme: {},
  variants: {},
  plugins: [],
};
