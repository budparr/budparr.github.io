module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["assets/css"],
    }),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
