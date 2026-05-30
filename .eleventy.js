const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Pass static assets directly to _site root
  eleventyConfig.addPassthroughCopy({ "site/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "site/icon.svg": "icon.svg" });
  eleventyConfig.addPassthroughCopy({ "site/ui-image.png": "ui-image.png" });
  eleventyConfig.addPassthroughCopy({ "site/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "site/llms.txt": "llms.txt" });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    if (isNaN(d.getTime())) return dateObj;
    return d.toISOString().split("T")[0];
  });

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

