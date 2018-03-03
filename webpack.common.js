const path = require('path');
const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
    entry: {
        main: "aurelia-bootstrapper",
    },

    output: {
        path: path.resolve(__dirname, "wwwroot", "dist"),
        publicPath: "/dist/",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },

    resolve: {
        extensions: [".ts", ".js"],
        modules: ["src", "node_modules"],
    },

    module: {
        rules: [
            { test: /\.ts$/i, use: "ts-loader" },
            { test: /\.html$/i, use: "html-loader" },
        ],
    },

    plugins: [
        new AureliaPlugin({
            features: {
                svg: false, // No svg element bindins, saves 20K
            }
        }),
    ],
};
