/**
 * A JavaScript Template module for the inline CSS `links`
 * @module _includes/shortcodes/inline-css
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = (eleventyConfig) =>
  /**
   * HTML `<style>` markup
   * @method
   * @name inlineCSS
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.inlineCSS(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode("cssInline", function () {
    if (process.env.ELEVENTY_ENV === "production") {
      var css = `${this.fileToString("static/dist/index.css")}`;
      var styles = `<style>${css}</style>`;
      return styles;
    } else {
      // Load via tag. Improves developer experience.
      var css = "index.css";
      var styles = `<link href="/dist/${css}" rel="stylesheet" media="screen">`;
      return styles;
    }
  });
