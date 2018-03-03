const webpack = require("webpack");
const merge = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
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
            __DEBUG__: JSON.stringify("true"),
        }),
    ],
});
