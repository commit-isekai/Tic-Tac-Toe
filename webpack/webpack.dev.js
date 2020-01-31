/* eslint linebreak-style: ["error", "windows"] */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'none',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
