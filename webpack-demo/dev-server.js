const express = require('express')
const webpack=require('webpack')
const webpackDevMiddleware=require('webpack-dev-middleware')

const app =  express()
const config=require('./webpack.config')
const compiler=webpack(config)

app.use(webpackDevMiddleware(compiler,{
  publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler,{
  log:console.log,path:'/__webpack_hmr',heartbeat:10*1000
}))

app.use(express.static(config.output.path))

app.listen(3000,()=>{
  console.log('Example app listening on port 3000.\n');
})