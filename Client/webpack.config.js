const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const tsconfig = require("./tsconfig.json");

const alias = Object.keys(tsconfig.compilerOptions.paths).reduce((result, aliasPath) => {
    const resolvePath = tsconfig.compilerOptions.paths[aliasPath][0].replace("*", "");
    result[aliasPath.replace("/*", "")] = path.resolve(path.join(__dirname, "src"), resolvePath);
    return result;
}, {});

console.log("Alias:", alias);

const appConfig = {
    CONFIG_API: JSON.stringify(process.env.CONFIG_API)
};

console.log("Config:", appConfig);

const isProduction = process.env.NODE_ENV === "production";

console.log(`Is Production: ${isProduction}`);

module.exports = {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.tsx",
    devtool: "source-map",
    output: {
        filename: "main.[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            // {
            //     test: /\.svg$/,
            //     use: "raw-loader"
            // },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts"
                        }
                    }
                ]
            },
            {
                test: /.(png|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias
    },
    plugins: [
        // new HardSourceWebpackPlugin(),
        new DefinePlugin(appConfig),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Friend Factory CMS",
            template: "public/index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "public/assets",
                    to: "assets"
                },
                {
                    from: "public/favicon.ico",
                    to: "favicon.ico"
                }
            ]
        })
    ],
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true
    }
};
