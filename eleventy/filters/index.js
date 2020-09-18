/**
 * A loader module for filters
 * @module _includes/filters
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/filters/ Filters in 11ty}
 */

// Import filters to include
var fileToString = require("./file-to-string");

module.exports = (eleventyConfig) => {
  fileToString(eleventyConfig);

  return;
};
