const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = resolve(__dirname, 'src/index.js');
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
      test: /\.(js)/,
      use: 'babel-loader',
      include: resolve(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'AMap': 'AMap'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '地图拾取器',
      template: resolve(__dirname, 'src/index.html'),
      inject: 'body',
    })
  ]
}