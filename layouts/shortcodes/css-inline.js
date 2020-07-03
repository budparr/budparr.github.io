//const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

module.exports = (eleventyConfig) =>
  eleventyConfig.addPairedShortcode("postcss", async (code) => {
    const filepath = path.join(__dirname, "../../assets/css/index.css");

    

    return await postcss([
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
      ...(process.env.NODE_ENV !== "development" ? [require("cssnano")] : []),
    ])
      .process(code, { from: filepath })
      .then((result) => result.css);
  });

  

  //console.log("START \n\n", postcss, "\n\n END \n\n");




// eleventyConfig.addShortcode('inlineCSS', function (data) {
//   var root = `${this.cssRoot(data)}`
//   var css = `${this.fileToString('css/index.css')}`;
//   (data.page.url === '/')
//     ? css += `${this.fileToString('css/home.css')}`
//     : '';
//   (data.form && data.form !== undefined)
//     ? css += `${this.fileToString('css/forms.css')}`
//     : css += '';
//   return `${root}\n${css}`
// })
