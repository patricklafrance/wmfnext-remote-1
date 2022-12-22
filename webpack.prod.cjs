const path = require("path");
const packageDependencies = require("./package.json").devDependencies;
const wmfConfig = require("./webpack.wmf.cjs");

module.exports = {
    mode: "production",
    target: "web",
    cache: false,
    devtool: false,
    optimization: {
        minimize: true
    },
    entry: "./src/register.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://localhost:8081/",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts[x]$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: path.resolve(__dirname, "tsconfig.build.json")
                    }
                }
            },
            {
                // https://stackoverflow.com/questions/69427025/programmatic-webpack-jest-esm-cant-resolve-module-without-js-file-exten
                test: /\.js/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".css"]
    },
    plugins: [
        wmfConfig(packageDependencies)
    ]
};
