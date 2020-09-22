const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');    //最小化打包  ---生产环境才需使用，开发环境可以不引用，后期优化再来处理
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');  //最小化打包样式文件  ---生产环境才需使用，开发环境可以不引用，后期优化再来处理
const devMode = process.env.NODE_ENV !== 'production';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
    return path.join(__dirname, './dist', dir)
}
module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'./src/main.js'),  //入口
    output: {
        path: path.join(__dirname,'./dist'),  //出口
        filename: "js/[name].js",   //输出文件名
        chunkFilename: 'js/[name].[hash:8].js'
    },
    performance:{
        maxEntrypointSize:1000000,
        maxAssetSize: 250000,
        assetFilter: function (assetFilename){
            return assetFilename.endsWith('.js');
        }
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
                element:{
                    test: /[\\/]element-ui[\\/]/,
                    name: 'element-ui',
                    chunks: 'all',
                },
                vue: {
                    test: /[\\/](vue|vue-style-loader)[\\/]/,
                    name: 'vue',
                    chunks: 'all',
                },
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                },
                styleCss: {
                    name: "styleCss",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                },
                styleLess: {
                    name: "styleLess",
                    test: /\.less/,
                    chunks: "all",
                    enforce: true
                }
             }
        }
    },
    resolve: {
        // 将 `.ts` 添加为一个可解析的扩展名。
        extensions: ['.js', '.ts', '.vue'],
        alias:{
        },
        cacheWithContext:false, //如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 false
        symlinks:false  //如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 false
    },
    devServer: {
        contentBase: './dist',
    },
    devtool: 'eval',  //开发环境eval-cheap-module-source-map  生产环境：eval
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: path.resolve(__dirname,'src')
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                // options: {
                //     plugins: ['syntax-dynamic-import']
                // },
                include: path.resolve(__dirname,'src')
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            // },
            {
                test: /\.(css|less)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true,
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use:[
                    'csv-loader',
                ]
            },
            {
                test: /\.xml$/,
                use:[
                    'xml-loader',
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: "Vue测试",
            template: "./src/app.html"
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/[name].[contenthash:8].css',
            chunkFilename: 'style/[id].[contenthash:8].css',
            allChunks: true
        }),
        new BundleAnalyzerPlugin(
            {
                analyzerMode: 'disabled',
                analyzerPort: 8889,
                reportFilename: 'report.html',
                defaultSizes: 'parsed',
                openAnalyzer: false,
                generateStatsFile: false,
                statsFilename: 'stats.json',
                statsOptions: null,
                logLevel: 'info'
            }
        ),
        // new ExtractTextPlugin('styles.css'),
        // new OptimizeCssAssetsPlugin()
    ]
}