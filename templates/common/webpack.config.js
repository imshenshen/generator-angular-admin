var webpack = require("webpack");
var path = require("path");
var glob = require("glob");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
function getEntry() {
    var entry = {};
    glob.sync(__dirname + "/src/*.js").forEach(function (name) {
        var tempName = name.match(/([^/]+?)\.(coffee|js)$/)[1];
        entry[tempName] = "./" + tempName;
    });
    return entry;
}
module.exports = {
    context: path.resolve(__dirname + "/src/"),
    entry: getEntry(),
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
            {test: /\.(png|woff|woff2|eot|ttf|svg)\??\S*$/, loader: 'url-loader?limit=100000'},
            {test: /\.json$/, loader: "json-loader"}
        ]
    },
    output: {
        path: __dirname + "/build",
        publicPath: "./",
        filename: "[name].js"
    },
    resolve: {
        //module目录
        modulesDirectories: [
            "node_modules",
            "bower_components"
        ],
        extensions: ['', '.js', '.json', '.less', '.css']
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};

