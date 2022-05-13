const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {


    mode: 'development',
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
        clean: true,
        filename: '[name].[contenthash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.sa?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/img'),
                    to: path.resolve(__dirname, 'dist/img'),
                }
            ],
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            minify: {
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"] // using import without file-extensions
    },
};
