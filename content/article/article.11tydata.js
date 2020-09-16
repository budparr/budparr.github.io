module.exports = {
  layout: 'layouts/page',
  // Note: The permalink value uses Nunjucks/Liquid syntax;
  // a future version of 11ty may allow for JavaScript template literals
  permalink: './article/{{page.fileSlug}}/index.html',
  tags: [
    'pages'
  ]
}

// export const layout = 'page';
// export const permalink = '/article/{{page.fileSlug}}/index.html';
// export const tags = [
//   'pages'
// ];
