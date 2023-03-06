const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const Dotenv = require('dotenv-webpack');

module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
      systemvars: true,
    }),
  ],
});
