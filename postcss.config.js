const hash = require("postcss-hash")({
  algorithm: "sha256",
  trim: 20,
  manifest: "./data/hashes_css.json",
});

module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["assets/css"],
    }),
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
    //   ...(process.env.NODE_ENV !== "TKdevelopment"
    //     ? [
    //         // require("cssnano"),
    //         hash,
    //       ]
    //     : []),
  ],
};

// console.log("NODE_ENV", env.NODE_ENV)
