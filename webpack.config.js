const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = resolve(__dirname, 'src/index.jsx');
const output = resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: entry
  },
  devServer: {
    contentBase: output,
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: false
  },
  devtool: 'eval-source-map',
  output: {
    path: output,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      use: 'babel-loader',
      include: resolve(__dirname, 'src')
    }, {
      test: /\.(css)/,
      exclude: resolve(__dirname, 'node_modules'),
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          localIdentName: '[name]_[local]_[hash:base64:5]',
        }
      }]
    }, {
      test: /\.(css)/,
      exclude: resolve(__dirname, 'src'),
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '地图拾取器',
      template: resolve(__dirname, 'src/index.html'),
      inject: 'body',
    })
  ]
}