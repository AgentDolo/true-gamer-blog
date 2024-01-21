




const { DateTime } = require("luxon");




module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/scripts'); // Copy scripts folder to output
    eleventyConfig.addPassthroughCopy('./src/news');
    eleventyConfig.addPassthroughCopy('./src/mw3');
    eleventyConfig.addPassthroughCopy('./src/wz');

    eleventyConfig.addFilter("postDate", (dateObj) => {
       return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED); 
    });

    return {

        dir: {
            input: "src",
            output: "public"
        }
    }
}




