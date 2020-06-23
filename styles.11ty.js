const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
//const crypto = require("crypto");

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = "index.css";

// const postcssHash = require("postcss-hash")({
//   algorithm: "sha256",
//   trim: 20,
//   manifest: "./manifest.json",
// });

//const hash = crypto.createHash("shaw256");

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, `./${fileName}`);
    // REMOVE console.log("pathme", rawFilepath);
    return {
      permalink: `css/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      // require('postcss-comment'),
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
      ...(process.env.NODE_ENV !== "development" ? [require("cssnano")] : []),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => console.log("START \n", result.css, "\n END \n"));
  }
};
