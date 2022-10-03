const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, "../../tsconfig.json"),
  ["@demo/auth-lib", "@demo/cross-cutting-concern"] // <-- register your libs here! ,'@demo/frontend-library'
);

module.exports = {
  output: {
    uniqueName: "mfe2",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./projects/mfe2/src/app/app.component.ts",
        "./Module": "./projects/mfe2/src/app/home/mfe2.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "@angular/forms": { singleton: true, strictVersion: true },
        "@angular/common/http": { singleton: true, strictVersion: true },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
