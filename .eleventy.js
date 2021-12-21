module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("res");
    return {
      dir: {
        input: "views",
        output: "dist"
      },
    }
  };