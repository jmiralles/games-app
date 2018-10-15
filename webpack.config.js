var path = require("path");

module.exports = {
    entry: ["@babel/polyfill", "./src/app.js"],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js?x$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        open: true
    }
};
