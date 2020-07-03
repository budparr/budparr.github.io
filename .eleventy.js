/**
 * @file Configures preferences for Eleventy
 * @author Bud Parr <budparr@thenewdynamic.com>
 * @see {@link https://www.11ty.dev/docs/config/ 11ty Documentation}
 */

// Require native Node.js modules
var fs = require("fs");

var includes = require("./layouts/index");

/**
 * 11ty’s configuration module
 * @module .eleventy
 * @param {Object} eleventyConfig 11ty’s Config API
 * @return {Object} 11ty’s Config object optional
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 */
module.exports = function (eleventyConfig) {
  //eleventyConfig.setQuietMode(true);

  // Pass 11ty’s Conig object to the includes module (~/_includes)
  includes(eleventyConfig);

  /**
   * Combine data in the Eleventy data cascade, rather than overwriting it
   * @see {@link https://www.11ty.dev/docs/data-deep-merge/ Data deep merge in 11ty}
   */
  eleventyConfig.setDataDeepMerge(true);

  /**
   * Copy static assets to the output directory, specifying a folder
   * @see {@link https://www.11ty.dev/docs/copy/ Passthrough copy in 11ty}
   */
  eleventyConfig.addPassthroughCopy({"static/uploads": "uploads"});

  /**
   * Have Eleventy watch the following additional files for live browsersync
   * @see @{@link https://www.11ty.dev/docs/config/#add-your-own-watch-targets Add your own watch targets in 11ty}
   */
  eleventyConfig.addWatchTarget("./assets/css/*.css");
  // eleventyConfig.addWatchTarget("./**/*.js");

  /**
   * Serve the rendered 404 page when using `eleventy --serve` locally
   * @see {@link https://www.11ty.dev/docs/quicktips/not-found/#with-serve Adding a 404 page in 11ty}
   */
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (err, bs) => {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("public/404.html");
          // Provides the 404 content without redirect
          res.write(content_404);
          // Add 404 http status code in request header
          // res.writeHead(404, { "Content-Type": "text/html" })
          res.writeHead(404);
          res.end();
        });
      },
    },
  });

  /**
   * Don't show all the rendered pages on command line. Override with --quiet=false
   * @see {@link https://www.11ty.dev/docs/config/#enable-quiet-mode-to-reduce-console-noise Enable Quiet Mode to Reduce Console Noise}
   */

  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      data: "data",
      includes: "layouts",
      output: "public",
    },
  };
};