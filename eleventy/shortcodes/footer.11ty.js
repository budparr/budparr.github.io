class siteFooter {
  data() {
    return {
      name: "Eleventy",
    };
  }
  render(data) {
    return data.content;
  }
}
console.log(siteFooter);
module.exports = siteFooter;
