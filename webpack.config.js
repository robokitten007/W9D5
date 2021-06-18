var path = require('path');

module.exports = {
  entry: "./widgets.jsx", //CHANGE THIS
  devtool: 'source-map',
  output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};