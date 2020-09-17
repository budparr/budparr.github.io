// Leaving hash for now while I think about serving the file
// const hash = require("postcss-hash")({
//   algorithm: "sha256",
//   trim: 20,
//   manifest: "./data/hashes_css.json",
// });

module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["assets/css"],
    }),
    require("tailwindcss"),
    require("autoprefixer"),

    ...(process.env.NODE_ENV !== "development"
      ? [
          require("cssnano"),
          //  hash
        ]
      : []),
  ],
};
