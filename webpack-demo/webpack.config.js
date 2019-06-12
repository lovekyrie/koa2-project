const path = require('path')
const MyPlugin = require('./src/myPlugin.js')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new MyPlugin()
  ]
}