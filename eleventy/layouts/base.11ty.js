/**
 * Base JavaScript Template module
 * @module _includes/layouts/base
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
 */
module.exports = function (data) {
  var l10n = data.site[data.locale];
  return `<!DOCTYPE html>
    <html lang="${
      data.locale ? l10n.locale : data.site.defaultLocale
    }" class="no-js">
    ${this.headTag(data)}
      <body>            
        <main id="main" class="grid gap bg-gray-600 text-black" style="height:2000px;">
          ${data.content}
        </main>    
        
        ${this.siteFooter(data)}  
      </body>
    </html>`;
};
