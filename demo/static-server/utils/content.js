const path = require('path')
const fs = require('fs')

//封装读取目录内容方法
const dir = require('./dir')

//封装读取文件内容方法
const file = require('./file')

async function content(ctx, fullStaticPath) {
  //封装请求资源的完整路径
  let reqPath = path.join(fullStaticPath, ctx.url)

  //判断请求路径是否为存在目录或文件
  let exist = fs.existsSync(reqPath)

  //返回请求内容，默认为空
  let content = ''

  if (!exist) {
    content = '404 Not Found! o(╯□╰)o'
  } else {
    let stat = fs.statSync(reqPath)

    if (stat.isDirectory()) {
      //如果请求为目录
      content = dir(ctx.url, reqPath)
    } else {
      //如果请求为文件
      content = file(reqPath)
    }
  }

  return content
}

module.exports = content