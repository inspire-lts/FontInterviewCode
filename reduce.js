function myReducer(callback, initialValue) {
  if (this === null || this === undefined) {
    throw new TypeError('cannot read filter of null or undefined')
  }
  if (Object.prototype.toString.call(callback) !== "[object Function]") {
    throw new TypeError(callback + "is not a function")
  }

  let obj = Object(this)
  let len = obj.length >>> 0
  let k = 0, pre
  if (initialValue) {
    pre = initialValue
  } else {
     // 没传入初始值的时候，取数组中第一个非 empty 的值为初始值
    while (k < len && !(k in obj)) {
      k++
    }
    pre = obj[k++]
  }

  while (k < len) {
    if (k in obj) {
      callback.call(pre, obj[k], k, obj)
    }
    k++
  }

  return pre
}