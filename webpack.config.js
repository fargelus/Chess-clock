const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: [
    './src/js/main.js',
  ],
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
