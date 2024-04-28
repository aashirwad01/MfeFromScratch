const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode:"development",
    devServer : {
        port:8082,
    },
    plugins : [
        new HtmlWebPackPlugin({
            template:"./public/index.html"
        }),
        new ModuleFederationPlugin({
            name:"remoteCatalogVal",
            filename:"remoteEntry.js",
            exposes:{
                "./remoteCatalogValApp" : "./src/index.js"
            }
        })
    ]
}
