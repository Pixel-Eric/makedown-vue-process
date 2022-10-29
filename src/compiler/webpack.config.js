const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    devServer: {
        hot: true
    },
    output: {
        path: path.join(__dirname, '../../dist/'),
        filename: './app.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader',
                    'css-loader',
                    'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jp(e)g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ],
    mode: 'development'
}