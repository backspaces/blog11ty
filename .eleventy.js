const { DateTime } = require('luxon')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/style.css')
    eleventyConfig.addPassthroughCopy('src/assets')

    eleventyConfig.addFilter('postDate', dateObj => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    // eleventyConfig.addFilter('toRoot', dir => {
    //     // console.log(document.URL + '/' + dir)
    //     return document.URL + '/' + dir
    // })

    // eleventyConfig.addNunjucksGlobal('root', function () {
    //     return document.URL
    // })
    // eleventyConfig.addNunjucksGlobal('root', document.URL)
    // eleventyConfig.addShortcode

    return {
        // pathPrefix: '/',
        // pathPrefix: '/src/JAMStack/public/', // works!
        pathPrefix: '/blog11ty/public/', // github
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'public',
        },
    }
}
