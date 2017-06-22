var path = require('path')
var webpack = require('webpack')

module.exports = {
  name: 'client',
  target: 'web',
  entry: {
    client: [
      'babel-polyfill',
      path.resolve(__dirname, './src/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader'
        }
      ]
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin() // new Webpack 3 thing?
  ],
  resolve: {
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    extensions: ['.js']
  }
}
