var path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, '/client/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/
    }],
    resolve: {
      extensions: ['', '.js']
    },
    modulesDirectores: [
      'node_modules',
      'client'
    ]
  }
};
