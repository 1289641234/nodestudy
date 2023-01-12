const fs = require('fs')

// 创建BUFFER ASCII码
const buf = new Buffer('hello') //字符串转换成BUFFER

// 创建BUFFER
const buf2 = Buffer.from('hello')

// 创建BUFFER
const buf3 = Buffer.from('你好吗')

// 转换BUFFER
buf3.toString()

// 手动转换编码
const buf4 = Buffer.from('你好吗','utf16le') // 默认UTF-8

// 转换BUFFER 编码操作
buf4.toString('utf16le')

// 8字节大小内存空间的BUFFER
const buf5 = Buffer.alloc(8)

// 手动对BUFFER里的字节进行操作
buf5[0] 
buf5[0] = 100
buf[0] = 'm'.charCodeAt() // 拿到M对应的ASCII编码

// 从文件中读取到BUFFER
fs.readFile('./foo.txt',(err,data)=>{
    if (err) {
        return 
    } else {
        data.toString() // data是BUFFER
        // 对BUFFER里面的字节进行修改
        data[0] = 0x6d
        console.log(data.toString);
    }
})

// 读取文件的二进制 node有一个库sharp 操作图片
fs.readFile('./foo.png',(err,data)=>{
    if (err) {
        return
    } else {
        console.log(data);
    }
})
