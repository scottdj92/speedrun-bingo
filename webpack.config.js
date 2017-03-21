const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const common = merge([
  {
    entry: {
      app: PATHS.app + '/index.js'
    },
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.marko', '.scss']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
  }
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      parts.loadMarko(PATHS.app),
      parts.extractCSS(PATHS.app)
    ]);
  }

  return merge([
    common,
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    }),
    parts.loadMarko(PATHS.app),
    parts.loadCSS(PATHS.app)
  ]);
};
