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
        contentBase: [
            path.join(__dirname, "webpack-devserver-root"),
            path.join(__dirname, "wwwroot"),
        ],
        hot: true,
        historyApiFallback: true,
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
