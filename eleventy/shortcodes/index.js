/**
 * A loader module for shortcodes
 * @module _includes/shortcodes
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
 */

// Import shortcodes to include
var siteTitle = require("./site-title");
var siteHead = require("./site-head");
//var cssExternal = require("./css-external")
var cssInline = require("./css-inline");

module.exports = (eleventyConfig) => {
  // Function calls to shortcodes to include
  //   archive(eleventyConfig)
  siteHead(eleventyConfig);
  siteTitle(eleventyConfig);
  cssInline(eleventyConfig);

  return;
};
