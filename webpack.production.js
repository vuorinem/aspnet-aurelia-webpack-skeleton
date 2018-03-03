const merge = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",

    plugins: [
        new webpack.DefinePlugin({
            // Some libraries optimize output for production Node environment
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEBUG__: JSON.stringify("false"),
        }),
    ],
});
