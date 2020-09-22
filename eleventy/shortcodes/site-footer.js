module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("siteFooter", function (data) {
    return `
    <div class="fixed inset-x-0 bottom-0">
    <div class="bg-gray-900">
      <div class="max-w-screen-xl text-white px-3 py-3 mx-auto sm:px-6 lg:px-8">
       nav items
      </div>
    </div>
  </div>
    `;
  });
};
