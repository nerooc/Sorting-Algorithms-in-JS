const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: "./src/script.js"
    },
    output: {
        filename: "./[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    plugins: [
        new MiniCssExtractPlugin({linkType: 'text/css', filename: "[name].[contenthash].css"}),
        new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['dist']}),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader", //2. Turns css into common js
                    "sass-loader" //1. Turns sass into css
                ]
            }, {
                test: /\.html$/,
                use: ["html-loader"]
            }, {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[contentHash].[ext]",
                        outputPath: "assets/img"
                    }
                }
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', {
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }
                        ]
                    }
                }
            }
        ]
    }
};