//var minifyHTML = require('./minify-html')
// var styles = require('./styles')

/**
 * A loader module for transforms
 * @module eleventy/transforms
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/config/#transforms Transforms in 11ty}
 */

var minifyHTML = require("./minify-html");

module.exports = (eleventyConfig) => {
  minifyHTML(eleventyConfig);

  return;
};
