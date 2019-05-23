const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
     <h1>koa2 request post demo</h1>
     <form method="POST" action="/">
       <p>userName</p>
       <input name="username" /></br>
       <p>nickName</p>
       <input name="nickname" /></br>
       <p>email</p>
       <input name="email" /></br>
       <button type="submit">submit</button>
     </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    //当post请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    let postData = ctx.request.body
    ctx.body = postData
  } else {
    //其他请求显示404
    ctx.body = '<h1> 404 !!! o(╯□╰)o</h1>'
  }
})


app.listen(3000, () => {
  console.log('[demo] request post-middleware is starting on port 3000')
})