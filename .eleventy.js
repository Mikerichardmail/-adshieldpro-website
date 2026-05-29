const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Pass static assets directly to _site root
  eleventyConfig.addPassthroughCopy({ "site/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "site/icon.svg": "icon.svg" });
  eleventyConfig.addPassthroughCopy({ "site/ui-image.png": "ui-image.png" });
  eleventyConfig.addPassthroughCopy({ "site/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "site/sitemap.xml": "sitemap.xml" });

  eleventyConfig.addShortcode("inlineFile", function (filePath) {
    const absolutePath = path.join(__dirname, filePath);
    return fs.readFileSync(absolutePath, "utf8");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};

