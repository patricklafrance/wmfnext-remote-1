import { createModulePlugin } from "wmfnext-shared/webpack.js";
import { getFileDirectory } from "wmfnext-remote-loader/webpack.js";
import path from "path";

import packageJson from "./package.json" assert { type: "json" };

const __dirname = getFileDirectory(import.meta);

/** @type {import("webpack").Configuration} */
export default {
    mode: "production",
    target: "web",
    cache: false,
    devtool: false,
    optimization: {
        minimize: true
    },
    entry: "./src/register.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        // The trailing / is very important, otherwise paths will ne be resolved correctly.
        publicPath: "http://localhost:8081/",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
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
        alias: {
            // Without the aliases, at runtime an "Invalid hook call" is thrown, see https://stackoverflow.com/questions/64283813/invalid-hook-call-on-npm-link-library
            "react": path.resolve(__dirname, "./node_modules/react"),
            "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
            // Without the alias, at runtime the index route doesn't render and we are stuck with a blank page.
            "react-router-dom": path.resolve(__dirname, "./node_modules/react-router-dom")
        },
        extensions: [".js", ".ts", ".tsx", ".css"]
    },
    plugins: [
        createModulePlugin("remote1", packageJson)
    ]
};
