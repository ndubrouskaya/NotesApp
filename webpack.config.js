var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: "./client/index.js",
    output: {
        path: '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }
        ]
    }
}