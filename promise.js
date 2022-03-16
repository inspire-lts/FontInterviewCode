class Promise {
  static PENDING = 'PENDING'
  static FULFILLED = 'FULFILLED'

  constructor(executor) {
    this.value = undefined
    this.callbacks = []
    this.status = Promise.PENDING

    // 一系列操作（状态的改变，成功回调的执行）
    const resolve = value => {
      // 只有处于 pending 状态的 promise 能调用 resolve
      if (this.status === Promise.PENDING) {
        // resolve 调用后，status 转为 fulfilled
        this.status = Promise.FULFILLED
        // 储存 fulfilled 的终值
        this.value = value
        // 一旦 resolve 执行，调用储存在回调数组里的回调
        this.callbacks.forEach(callback => callback())
      }
    }

    executor(resolve)
  }

  then = onFulfilled =>
    new Promise(resolve => {
      // 当 status 为执行态（Fulfilled）时
      if (this.status === Promise.FULFILLED) {
        resolve(onFulfilled(this.value))
      }
      // 当 status 为 Pending 时
      if (this.status === Promise.PENDING) {
        // 将 onFulfilled 存入回调数组
        this.callbacks.push(() => resolve(onFulfilled(this.value)))
      }
    })
}
