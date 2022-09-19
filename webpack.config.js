const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const cssLoaders = (extra) => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {},
    },
        "css-loader",
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

console.log('isDev:', isDev)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    target: "web",
    entry: {
        main: ['@babel/polyfill', './index.js'],
        analytics: './analytics.ts'
    },
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.jpg', '.svg'],
        alias: {
            '@src': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: isProd,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: false
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.(scss)$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-typescript"]
                    }
                }
            }
        ]
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    }
}