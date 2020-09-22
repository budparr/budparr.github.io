/**
 * 11ty’s configuration module
 * @module .eleventy
 * @param {Object} eleventyConfig 11ty’s Config API
 * @return {Object} 11ty’s Config object optional
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 */

// var fs = require("fs");

/**
 * Require the includes module for the following.
 *
 * - Filters (for modifying content on input)
 * - Shortcodes (for reusable content)
 * - Transforms (for modifying a template’s output)
 */
var includes = require("./eleventy/index");

module.exports = function (eleventyConfig) {
  console.log("Mode: ", process.env.NODE_ENV);
  // Pass 11ty’s Conig object to the includes module (~/_includes)
  includes(eleventyConfig);

  /**
   * Combine data in the Eleventy data cascade, rather than overwriting it
   * @see {@link https://www.11ty.dev/docs/data-deep-merge/ Data deep merge in 11ty}
   */
  eleventyConfig.setDataDeepMerge(true);

  /**
   * Copy static assets to the output directory
   * @see {@link https://www.11ty.dev/docs/copy/ Passthrough copy in 11ty}
   */
  eleventyConfig.addPassthroughCopy({ "static/uploads": "uploads" });

  /**
   * Have Eleventy watch the following additional files for live browsersync
   * @see @{@link https://www.11ty.dev/docs/config/#add-your-own-watch-targets Add your own watch targets in 11ty}
   */
  eleventyConfig.addWatchTarget("./static/dist/*.css");
  //   eleventyConfig.addWatchTarget('./**/*.js')

  eleventyConfig.setBrowserSyncConfig({
    files: ["public/**/*"],
    open: true,
  });

  return {
    dir: {
      includes: "eleventy",
      layouts: "eleventy/layouts",
      data: "data",
      output: "public",
    },
    pathPrefix: "/",
  };
};
