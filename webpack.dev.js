const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const Dotenv = require('dotenv-webpack');

module.exports = merge(webpackConfig, {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env',
      systemvars: true,
    }),
  ],
});
