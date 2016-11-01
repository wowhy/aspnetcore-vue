var webpack = require('webpack')
var path = require('path')

var baseWebpackConfig = {
  output: {
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue',
      options: {
        loaders: {
          scss: 'vue-style!css!sass',
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'css'
    }, {
      test: /\.sass$/,
      loaders: ["vue-style", "css", "sass"]
    }, {
      test: /\.scss$/,
      loaders: ["vue-style", "css", "sass"]
    }, {
      test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
      loader: 'file',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  }
}

module.exports = baseWebpackConfig
