const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const util = require('util');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPassthroughCopy('src/images')

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return dateObj.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
  });

  eleventyConfig.addFilter("htmlDateISOString", (dateObj) => {
    return dateObj.toISOString();
  });

  eleventyConfig.addFilter("stringify", obj => {
    return util.inspect(obj);
  });

  eleventyConfig.addFilter("series", (collection, series) => {
    if (!series) {
      return collection;
    }

    return collection.filter(item => item.data.series === series);
  });

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
