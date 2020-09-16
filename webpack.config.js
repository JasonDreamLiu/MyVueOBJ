const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'./src/main.js'),  //入口
    output: {
        path: path.join(__dirname, './dist'),  //出口
        filename: "[name].[contenthash].js",   //输出文件名
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        // 将 `.ts` 添加为一个可解析的扩展名。
        extensions: ['.js', '.ts', '.vue'],
        alias:{
            "@":path.resolve(__dirname, './src'),
        }
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
              loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.css$/,
                use:[
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
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
                ]
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
        new VueLoaderPlugin()
    ]
}