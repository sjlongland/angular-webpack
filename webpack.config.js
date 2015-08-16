module.exports = {
    context: __dirname + '/app/js',
    entry: './app.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'app.js'
    },
    devtool: 'source-map'
};
