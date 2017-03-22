const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.devServer = function (options) {
  return {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
      hot: true,
      stats: 'errors-only',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({})
    ]
  };
};

exports.loadJavascript= function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: paths,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  };
};

exports.lintJavascript = function({ paths, options }) {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: paths,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: options
        }
      ]
    }
  }
};

exports.loadCSS = function(paths) {
  return {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
        }
      ]
    }
  };
};

exports.extractCSS = function (paths) {
  return {
    plugins: [
      new ExtractTextPlugin({
        filename: 'bundle.css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'resolve-url-loader', 'sass-loader']
          })
        }
      ]
    }
  };
};
