module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: false,
    mode: "all",
    content: ["./eleventy/layouts/*.11ty.js", "./eleventy/layouts/**/*.js"],
  },
  theme: {},
  variants: {},
  plugins: [],
};
