/**
 * A loader module for includes
 * @module _includes/index
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 */

// Import modules to include
var filters = require('./filters/index')
var shortcodes = require('./shortcodes/index')
var transforms = require('./transforms/index')

module.exports = (eleventyConfig) => {
  //// Function calls to modules to include
    filters(eleventyConfig)
    shortcodes(eleventyConfig)
    transforms(eleventyConfig)

  return;
};
