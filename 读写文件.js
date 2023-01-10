const fs = require('fs')

// 假设有一段客户端传过来的数据
const content = 'hello'

// 写入操作
fs.writeFile(
  '/foot.txt',
  content,
  {
    flag: 'w', //写入方式
    encoding: 'utf-8', //编码格式
  },
  (err) => {
    if (err) {
      return
    }
  },
)

// 读取操作
fs.readFile(
  '/foot.txt',
  {
    encoding: 'utf-8', //编码格式
  },
  (err, data) => {
    if (err) {
      return
    } else {
      console.log(data)
    }
  },
)
