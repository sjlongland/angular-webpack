module.exports = {
    context: __dirname + '/app/js',
    entry: './app.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'app.js'
    },
    preLoaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }
    ],
    eslint: {
        configFile: './.eslintrc'
    },
    devtool: 'source-map'
};
