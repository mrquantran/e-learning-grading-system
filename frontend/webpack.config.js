const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = (env, agrv) => {
  const isDev = agrv.mode === "development"
  const isAnalyze = env && env.analyze

  const basePlugins = [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body"
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "**/*",
    //       to: "",
    //       globOptions: {
    //         ignore: ["public/index.html"]
    //       }
    //       // context: path.resolve("public")
    //     }
    //   ]
    // }),
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "static/css/[name].[contenthash:6].css"
    }),
    new webpack.ProgressPlugin()
  ]

  let prodPlugins = [
    ...basePlugins,
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      test: /\.(css|js|html|svg)$/
    })
  ]
  if (isAnalyze) {
    prodPlugins = [...prodPlugins, new BundleAnalyzerPlugin()]
  }

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ["ts-loader", "eslint-loader"],
          exclude: /node_modules/
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: isDev ? true : false }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: isDev ? true : false }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: isDev ? "[path][name].[ext]" : "static/fonts/[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: isDev
                  ? "[path][name].[ext]"
                  : "static/media/[name].[contenthash:6].[ext]"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      alias: {
        "@": path.resolve("src"),
        "@@": path.resolve()
      }
    },
    output: {
      path: path.resolve("build"),
      filename: "static/js/main.[contenthash:6].js",
      publicPath: "/",
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false
      }
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public")
      },
      compress: true,
      port: 8080
    },
    devtool: isDev ? "source-map" : false,
    plugins: isDev ? basePlugins : prodPlugins,
    performance: {
      maxEntrypointSize: 800000 //  Khi có 1 file build vượt quá giới hạn này (tính bằng byte) thì sẽ bị warning trên terminal.
    }
  }
}
