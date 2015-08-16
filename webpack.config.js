var path = require('path');

module.exports = {
    context: path.join(__dirname, 'app/js'),
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'app/dist'),
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
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'app')
    }
};
