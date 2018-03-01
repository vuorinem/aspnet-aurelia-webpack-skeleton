const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = require("./webpack.development.js");

module.exports = merge(development, {
    output: {
        path: path.resolve(__dirname, "webpack-devserver-root", "dist"),
        publicPath: "/dist/",
    },

    devServer: {
        contentBase: path.join(__dirname, "webpack-devserver-root"),
        hot: true,
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
