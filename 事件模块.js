// event模块里的EventEmitter类
const { EventEmitter } = require('event')

// 创建实例
const emitter = new EventEmitter()

// 监听事件
const handleFn = (arg) => {
  console.log(...arg)
}
emitter.on('why', handleFn)

// 发射事件
setTimeout(() => {
  emitter.emit('why')
  // 取消事件监听
  emitter.off('why', handleFn)
}, 2000)

// 传递参数
setTimeout(() => {
  emitter.emit('why', 'a', 'b', 'c')
  // 取消事件监听
  emitter.off('why', handleFn)
}, 2000)

// 获取某个事件所有监听器
emitter.listeners('why')

// 获取某个事件所有监听器的个数
emitter.listenerCount('why')

// 改变该emitter对象的事件最大监听器的个数，默认10
emitter.getMaxListeners()
emitter.setMaxListeners(20)

// 获取该对象监听的所有事件的字符串数组
emitter.eventNames()

// 只监听一次事件,后续有事件不监听
emitter.once('why',handleFn)

// 移除emitter对象的所有监听函数
emitter.removeAllListeners()

// 移除emitter对象的某个事件的所有监听函数
emitter.removeAllListeners('why')