const fs = require('fs')

/**
 * 
 * @param {*} filePath 文件本地的绝对路径
 * @return {string|binary} 
 */
function file(filePath) {
  let content = fs.readFileSync(filePath, 'binary')
  return content
}

module.exports = file