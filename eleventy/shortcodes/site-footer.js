module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("siteFooter", function (data) {
    return `
    <div class="fixedd inset-x-0 bottom-0">
    <div class="bg-gray-900">
      <div class="max-w-screen-xl text-white px-3 py-3 mx-auto sm:px-6 lg:px-8">
       nav items <a href="/about" alt="bud">Bud</a> <a href="/speaking" alt="bud">Bud</a>
      </div>
    </div>
  </div>
    `;
  });
};
