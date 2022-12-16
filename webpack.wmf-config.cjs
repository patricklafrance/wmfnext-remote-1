// new ModuleFederationPlugin({
//     name: "remote1",
//     filename: "remoteEntry.js",
//     exposes: {
//         "./register": "./src/register"
//     },
//     shared: {
//         "react": {
//             singleton: true,
//             requiredVersion: deps["react"]
//         },
//         "react-dom": {
//             singleton: true,
//             requiredVersion: deps["react-dom"]
//         },
//         "react-router-dom": {
//             singleton: true,
//             requiredVersion: deps["react-router-dom"]
//         },
//         "@sharegate/orbit-ui": {
//             singleton: true,
//             requiredVersion: deps["@sharegate/orbit-ui"]
//         }
//     }
// })
