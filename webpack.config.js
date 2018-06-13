const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
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
  plugins: [htmlPlugin],
  devServer: {
    historyApiFallback: true,
  },
}
