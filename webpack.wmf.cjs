const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const RemoteModulePlugin = require("wmfnext-remote-loader/dist");

// TODO: once the shell is developed, we might want to wrap this plugin in a custom plugin like FederatedModulePlugin
// to establish our conventions.
// Conventions will be:
//      - filename is always: "remoteEntry.js"
//      - ./register is always the name of remote entry
// We might also find a way to not requires the consumers to specify react & react router versions.

module.exports = function(packageDependencies) {
    return new ModuleFederationPlugin({
        name: "remote1",
        filename: "remoteEntry.js",
        exposes: {
            "./register": "./src/register"
        },
        shared: {
            "react": {
                singleton: true,
                requiredVersion: packageDependencies["react"]
            },
            "react-dom": {
                singleton: true,
                requiredVersion: packageDependencies["react-dom"]
            },
            "react-router-dom": {
                singleton: true,
                requiredVersion: packageDependencies["react-router-dom"]
            }
        }
    });
};
