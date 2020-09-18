module.exports = (eleventyConfig) =>
  /**
   * HTML `<head>` markup
   * @method
   * @name headTag
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.headTag(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode("headTag", function (data) {
    return `<head>
      ${this.titleTag(data)}
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">      
      ${this.siteCSS(data)}      
      ${this.siteJS(data)}      
      
    </head>`;
  });
