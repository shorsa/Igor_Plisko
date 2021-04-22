const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const tsconfig = require("./tsconfig.json");
const { InjectManifest } = require("workbox-webpack-plugin");

const alias = Object.keys(tsconfig.compilerOptions.paths).reduce(
  (result, aliasPath) => {
    const resolvePath = tsconfig.compilerOptions.paths[aliasPath][0].replace(
      "*",
      ""
    );
    result[aliasPath.replace("/*", "")] = path.resolve(
      path.join(__dirname, "src"),
      resolvePath
    );
    return result;
  },
  {}
);

const isProduction = process.env.NODE_ENV === "production";

const appConfig = {
  CONFIG_API: JSON.stringify(process.env.CONFIG_API),
  PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
  NODE_ENV: process.env.NODE_ENV,
};

console.log("Alias:", alias);

console.log("Config:", appConfig);
console.log(`Is Production: ${isProduction}`);

const COPY_FILES = [
  {
    from: "public/assets",
    to: "assets",
  },
  {
    from: "public/manifest.json",
    to: "manifest.json",
  },
  {
    from: "public/favicon.ico",
    to: "favicon.ico",
  },
];

const PLUGINS = [
  new DefinePlugin(appConfig),
  new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ["**/*.map"],
    protectWebpackAssets: false,
  }),
  new InjectManifest({
    swSrc: "./src/service-worker.ts",
    swDest: `${path.resolve(__dirname, "./build")}/service-worker.js`,
    maximumFileSizeToCacheInBytes: 100000000,
    exclude: [/\.config$/],
  }),
  new HtmlWebpackPlugin({
    title: "Friend Factory CMS",
    template: "public/index.html",
  }),
  new CopyPlugin({
    patterns: COPY_FILES,
  }),
];

const MODULE_PULES = [
  {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.scss$/i,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "sass-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
  {
    test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
        },
      },
    ],
  },
  {
    test: /.(png|svg|gif)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
];

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
  },
  target: 'web',
  module: {
    rules: MODULE_PULES,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias,
  },
  plugins: PLUGINS,
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
  },
};
