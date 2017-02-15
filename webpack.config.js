var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/javascripts/index.js',
  output: {
    path: path.resolve(__dirname, 'src') + '/app',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/javascripts'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
