module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("res");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy({"node_modules/swup/dist/swup.min.js": "js/swup.js"});
    return {
      dir: {
        input: "views",
        output: "dist"
      },
    }
  };