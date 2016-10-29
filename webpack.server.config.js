var path = require('path')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')

var serverWebpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  devtool: 'inline-source-map',
  entry: {
    server: './ClientApp/server.js'
  },
  output: {
    path: path.resolve(__dirname, './ClientApp/dist')
  }
})

module.exports = serverWebpackConfig
