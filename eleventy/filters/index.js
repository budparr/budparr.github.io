/**
 * A loader module for filters
 * @module _includes/filters
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/filters/ Filters in 11ty}
 */

// Import filters to include
var fileToString = require("./file-to-string");
// var minifyCSS = require('./minify-css')
// var minifyJS = require('./minify-js')

module.exports = (eleventyConfig) => {
  // Function calls to filters to include
  fileToString(eleventyConfig);
  //   minifyCSS(eleventyConfig)
  //   minifyJS(eleventyConfig)

  return;
};
