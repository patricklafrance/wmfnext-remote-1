const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
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
  // ***** TODO: There should be multiple entries - Index.tsx and Register.tsx, probably based on LOCAL or not?!?!
  entry: "./src/index.tsx",
  output: {
    // The trailing / is important otherwise hot reload doesn't work.
    publicPath: "http://localhost:8081/",
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
        test: /\.(css)$/,
        exclude: /node_modules/,
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
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ]
};
