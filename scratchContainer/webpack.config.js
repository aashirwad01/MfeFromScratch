const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins:[
    new HtmlWebPackPlugin({
      template : "./public/index.html"
    }),
    new ModuleFederationPlugin({
      name:"remoteVal",
      filename:"remoteEntry.js",
      exposes:{
        "./remoteApp":"./src/index.js"
      },
      remotes:{},

    })
  ]
};
