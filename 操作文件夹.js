const fs = require('fs')

// 创建文件夹
fs.mkdir('/foot.txt', (err) => {
  console.log(err)
})

// 读取文件夹
fs.readdir('./foot', { withFileTypes: true }, (err, files) => {
  if (err) {
    return
  } else {
    console.log(files)
    files.forEach((item) => {
      if (item.isDirectory()) {
        fs.readdir(`./foot/${item.name}`, (err, files) => {
          if (err) {
            return
          } else {
            // 重复操作了
          }
        })
      } else {
        // 对item进行一系列操作
      }
    })
  }
})

// 递归使读取文件更加完善
function readDirectory(dir) {
  fs.readdir('./foot', { withFileTypes: true }, (err, files) => {
    if (err) {
      return
    } else {
      console.log(files)
      files.forEach((item) => {
        if (item.isDirectory()) {
          readDirectory(`${dir}/${item.name}`)
        } else {
          console.log(item.name)
        }
      })
    }
  })
}

// 对文件夹进行重命名
fs.rename('./foot', './coder', (err) => {
  console.log(err)
})

// 对文件进行重命名
fs.rename('./foot.txt', './coder.txt', (err) => {
  console.log(err)
})

// 创建一个文件夹
fs.mkdir('./foot',err=>{
    console.log(err);
})

