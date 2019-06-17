const koa=require('koa')
const webpack=require('webpack')
const webpackDevMiddleware=require('webpack-dev-middleware')
const server = require("koa-static");

const app=new koa()
const config=require('./webpack.config')
const compiler=webpack(config)

app.use(webpackDevMiddleware(compiler,{
  publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler,{
  log:console.log,path:'/__webpack_hmr',heartbeat:10*1000
}))

app.use(server(config.output.path))

app.listen(3000,()=>{
  console.log('Example app listening on port 3000.\n');
})