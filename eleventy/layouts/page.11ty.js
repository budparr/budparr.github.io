/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
exports.data = {
    layout: 'base'
  }
  
  /**
   * The content of the page template
   * @method
   * @name render()
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered template
   * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
   */
  exports.render = data =>
    `<article>
      <header class="article-header bud">
        <h2>${data.title}</h2>
      </header>
      ${data.content}
    </article>`
  