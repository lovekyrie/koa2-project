 const Koa = require('koa')
 const app = new Koa()

 app.use(async (ctx) => {

   if (ctx.url === '/index') {
     //set cookie
     ctx.cookies.set(
       'cid',
       'hello world', {
         domain: 'localhost', //写cookie所在的域名
         path: '/index', //路径
         maxAge: 10 * 60 * 1000, //cookie有效时长
         expires: new Date('2019-5-25'), //cookie失效时间
         httpOnly: false, //是否只用于http请求中获取
         overwrite: false //是否允许重写
       }
     )
     ctx.body = 'cookie is ok'
   } else {
     ctx.body = 'hello world'
   }
 })

 app.listen(3000, () => {
   console.log('[demo] cookie is starting at port 3000')
 })