// 异步回调
fs.open('./foo.txt', (err, fd) => {
  if (err) {
    return
  } else {
    // 提供文件描述符
    console.log(fd)
    // 通过文件描述符进行一些读取操作
    fs.readFile(fd, (err, data) => {})
    fs.writeFile(fd, (err, data) => {})
    // 读取文件信息
    fs.fstat(fd, (err, stats) => {
      // 文件信息
      if (err) {
        console.log(err)
        return
      } else {
        console.log(stats)
      }
      // 最后一个回调函数，当调完这个函数的时候，关闭文件
      fs.close(fd)
    })
  }
})
