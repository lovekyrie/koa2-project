const path = require('path')
const webpack=require('webpack')
const MyPlugin = require('./src/myPlugin.js')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath:'/dist/'
  },
  module: {
    rules: [{
      test: /.js$/,
      use: 'babel-loader'
    },{
      test:/.css$/,
      use:[
        'style-loader',
        'css-loader'
      ]
    },{
      test:/.less$/,
      use:[
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },{
      test:/\.(png|jpg|svg|gif)$/,
      use:[
        {
          loader:'url-loader',
          options:{
            limit:10240
          }
        }
      ]
    },{
      test:/\.(woff|woff2|eot|ttf|otf)$/,
      use:'file-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}