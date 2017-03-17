exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    }
  }
};

exports.loadMarko = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.marko$/,
          include: paths,
          loader: 'marko-loader'
        }
      ]
    }
  }
};

exports.loadCSS = function(paths) {
  return {
    modules: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
        }
      ]
    }
  }
}
