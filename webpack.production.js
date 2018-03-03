const merge = require("webpack-merge");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [
                                    require("autoprefixer"),
                                ],
                            },
                        },
                        "sass-loader",
                    ],
                }),
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            // Some libraries optimize output for production Node environment
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEBUG__: JSON.stringify("false"),
        }),
        new ExtractTextPlugin("app.css"),
    ],
});
