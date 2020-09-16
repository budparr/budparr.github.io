module.exports = (eleventyConfig) =>
  eleventyConfig.addShortcode("cssExternal", function (data) {
    // var css = data.hashes_css["index.css"];
    var css = "index.css";
    var html = `<link href="/dist/${css}" rel="stylesheet" media="screen">`
    return html;
  });
