var path = require('path');

module.exports = {
    context: path.join(__dirname, 'app/js'),
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'app/dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    devtool: 'source-map',
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'app')
    }
};
