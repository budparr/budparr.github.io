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
  eleventyConfig.addShortcode("siteJS", function () {
    
      // Load via tag. Improves developer experience.
      var jsFile = "index.js";
      var styles = `<script src="/dist/${jsFile}" defer></script>`;
      return styles;

  });
