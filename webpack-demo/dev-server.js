const koa=require('koa')
const webpack=require('webpack')
const webpackDevMiddleware=require('webpack-dev-middleware')

const app=new koa()
const config=require('./webpack.config')
const compiler=webpack(config)

app.use(webpackDevMiddleware(compiler,{
  publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler))

app.listen(3000,function(){
  console.log('Example app listening on port 3000.\n');
})