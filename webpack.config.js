const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
  },
  resolve: {
   alias: {
     vue$: 'vue/dist/vue.esm.js',
   },
 },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: 'index.html',
      to: '',
    }]),
  ],
};
