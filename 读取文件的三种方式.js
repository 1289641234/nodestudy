// 同步
const state = fs.readFileSync('./foo.txt', { encoding: 'utf-8' })
// 异步回调函数
fs.readFile('./foo.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
// 异步promise
fs.promises.readFile('./foo.txt', { encoding: 'utf-8' }).then((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
