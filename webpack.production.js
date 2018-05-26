const merge = require("webpack-merge");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            // Some libraries optimize output for production Node environment
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEBUG__: JSON.stringify("false"),
        }),
        new MiniCssExtractPlugin({
            filename: "app.css",
        }),
    ],
});
