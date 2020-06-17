const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = "index.css";

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, `./${fileName}`);
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
      require(`tailwindcss`)(`./styles/tailwind.config.js`),
      require(`autoprefixer`),
      ...(process.env.ELEVENTY_PRODUCTION
        ? [
            require(`cssnano`),
            require(`@fullhuman/postcss-purgecss`)({
              content: ["_site/**/*.html"],
              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
              whitelist: [],
              whitelistPatterns: [/body/, /headroom/, /ril/],
            }),
          ]
        : []),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
};
