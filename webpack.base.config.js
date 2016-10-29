var baseWebpackConfig = {
  output: {
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}

module.exports = baseWebpackConfig
