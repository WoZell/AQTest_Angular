const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'),
    ['@demo/auth-lib']  // <-- register your libs here!
);


module.exports = {
  output: {
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true }, 
        "@angular/common": { singleton: true, strictVersion: true }, 
        "@angular/router": { singleton: true, strictVersion: true },
        "@angular/forms": { singleton: true, strictVersion: true },
        "@angular/common/http": { singleton: true, strictVersion: true }, 
        ...sharedMappings.getDescriptors() 
      }
    }),sharedMappings.getPlugin()
  ]
};
