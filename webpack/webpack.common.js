/* eslint linebreak-style: ["error", "windows"] */

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: './images',
          },
        },
      },
    ],
  },
};
