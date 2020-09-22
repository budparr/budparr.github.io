/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
exports.data = {
    layout: 'base'
  }
  
  /**
   * The content of the home page template
   * @method
   * @name render()
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered template
   * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
   */
  exports.render = function (data) {
    var l10n = data.site[data.locale]
    var reversed = [...data.collections.posts.slice(-2)].reverse()
    return `<article class="p-32">      
      ${data.content}
      
      
    </article>`
  }
  