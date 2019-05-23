const Koa = require('koa')
const app = new Koa()

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
    //当post请求的时候，解析post表单中的数据，并显示出来
    let postData = await parsePostData(ctx)
    ctx.body = postData
  } else {
    //其他请求显示404
    ctx.body = '<h1> 404 !!! o(╯□╰)o</h1>'
  }
})

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = ''
      ctx.req.addListener('data', (data) => {
        postData += data
      })
      ctx.req.addListener('end', function () {
        let parseData = parseQueryStr(postData)
        resolve(parseData)
      })
    } catch (error) {
      reject(error)
    }
  })
}

function parseQueryStr(querystr) {
  let queryData = {}
  let queryStrList = querystr.split('&')
  console.log(queryStrList)
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=')
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }

  return queryData
}

app.listen(3000, () => {
  console.log('[demo] request post is starting on port 3000')
})