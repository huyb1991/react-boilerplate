// Follow official guide: https://webpack.js.org/guides/production/
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin') // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin') // eslint-disable-line

const cleanDist = new CleanWebpackPlugin(['dist'])
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
})

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
      themes: path.resolve(__dirname, 'src/themes/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [cleanDist, htmlPlugin],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
