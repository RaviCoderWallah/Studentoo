module.exports = function(eleventyConfig) {
  // Ab assets folder 'src' ke andar hai, isliye path badal gaya
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};