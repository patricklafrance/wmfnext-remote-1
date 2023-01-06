import HtmlWebpackPlugin from "html-webpack-plugin";
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin.js";
import { createRemoteConfiguration } from "wmfnext-remote-loader/createModuleFederationConfiguration.js";
import path from "path";
import url from "url";
import packageJson from "./package.json" assert { type: "json" };

// "__dirname" is specific to CommonJS: https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isLocalDevelopment = process.env.LOCAL === "true";

/** @type {import("webpack").Configuration} */
export default {
    mode: "development",
    target: "web",
    devtool: "inline-source-map",
    devServer: {
        port: 8081,
        historyApiFallback: true,
        // Otherwise hot reload in the host failed with a CORS error.
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    entry: isLocalDevelopment ? "./src/index.ts" : "./src/register.tsx",
    output: {
        // The trailing / is important otherwise hot reload doesn't work.
        publicPath: "http://localhost:8081/"
    },
    module: {
        rules: [
            {
                test: /\.ts[x]$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        configFile: path.resolve(__dirname, "tsconfig.dev.json")
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
        // Must add ".js" for files imported from node_modules.
        extensions: [".js", ".ts", ".tsx", ".css"]
    },
    plugins: [
        new ModuleFederationPlugin(
            createRemoteConfiguration(
                "remote1",
                packageJson,
                {
                    sharedDependencies: {
                        "wmfnext-shell": {
                            singleton: true,
                            requiredVersion: "0.0.1"
                        }
                    }
                }
            )
        ),
        isLocalDevelopment && new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ].filter(Boolean)
};
