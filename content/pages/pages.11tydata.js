module.exports = {
  layout: 'layouts/page',
  // Note: The permalink value uses Nunjucks/Liquid syntax;
  // a future version of 11ty may allow for JavaScript template literals
  permalink: '/{{page.fileSlug}}/index.html',
  tags: [
    'pages'
  ]
}
