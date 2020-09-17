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
var siteCSS = require("./site-css");

module.exports = (eleventyConfig) => {
  siteHead(eleventyConfig);
  siteTitle(eleventyConfig);
  siteCSS(eleventyConfig);

  return;
};
