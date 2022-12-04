const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin');
const WebpackNodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.ts',
  // devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './index.js',
    clean: true,
    chunkFilename: '[id]/index.js',
    chunkFormat: "module",
    library:{
      type: "module",
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
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
        test: /\.(png|jp(e)g|gif|svg|vue)$/,
        loader: 'url-loader',
        options: {
          esModule: false
        }
      }
    ]
  },
  externalsPresets: {
    node: true
  },
  resolve: {
    extensions: [".ts", ".js", '.json'],
  },
  experiments: {
    outputModule: true
  },
  externals: [WebpackNodeExternals({})],
  mode: 'development'
}