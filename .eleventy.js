const fs = require("fs");

module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("res");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy({"node_modules/swup/dist/swup.min.js": "js/swup.js"});
    eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function(err, bs) {
  
          bs.addMiddleware("*", (req, res) => {
            const content_404 = fs.readFileSync('dist/404/index.html');
            // Add 404 http status code in request header.
            res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        }
      }
    });
    return {
      dir: {
        input: "views",
        includes: "common",
        output: "dist"
      },
    }
  };