const glob = require("glob");

module.exports = function(config) {
    config.addPassthroughCopy("images");

    config.addGlobalData("imagesList", function() {
        var images = glob.sync("./images/*")
        return images
    })
}