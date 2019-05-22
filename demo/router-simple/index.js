const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

app.use(async (ctx) => {
  let url = ctx.request.url
  let html = await router(url)
  ctx.body = html
})
/**
 * 
 * @param {string} url
 * @return  {string} 获取html文件内容
 */
async function router(url) {
  let view = 'index.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break;
    case '/index':
      view = 'index.html'
      break;
    case '/todo':
      view = 'todo.html'
      break;
    case '/404':
      view = '404.html'
      break;
    default:
      break;
  }

  let html = await render(view)
  return html
}

function render(page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./views/${page}`
    fs.readFile(viewUrl, "binary", (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

app.listen(3000, () => {
  console.log('[demo] route - simple is starting at port 3000')
})