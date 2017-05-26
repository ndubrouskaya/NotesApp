module.exports = {
    devtool: 'eval-source-map',
    entry: './client/index.js',
    output: {
        path: '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    }
};
