var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: ['./application.js'],
  output: {
    path: __dirname + '/www',
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      },
      { test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style!css!sass'
      },
      {test: /\.(woff|svg|ttf|eot|gif)([\?]?.*)$/, loader: 'file-loader?name=[name].[ext]'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
          $: 'jquery',
       jQuery: 'jquery',
       'window.jQuery': 'jquery',
       Materialize: 'materialize-css',
       'window.Materialize': 'materialize-css'
    })
  ]
};
