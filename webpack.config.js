"use strict";
// vim: set tw=78 et sw=4 ts=4 fileencoding=utf-8:
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: './js/app.js',
    output: {
        path: path.join(__dirname, 'dist')
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
                exclude: /index.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Minimal AngularJS application example',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devtool: 'source-map',
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }
};
