module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    mode: "all",
    content: ["./eleventy/layouts/*.11ty.js", "./eleventy/layouts/**/*.js"],
  },
  theme: {},
  variants: {},
  plugins: [],
};
