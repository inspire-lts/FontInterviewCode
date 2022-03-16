function myMap(callback, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError("cannot read map of null or undefied")
  }

  if (Object.prototype.toString.call(this) !== '[object Function]') {
    throw new TypeError(callback + 'is not a function')
  }
  let obj = Object(this)
  let len = obj.length >>> 0
  let k = 0
  let result = []

  while (k < len) {
    if (k in obj) {
      let tmp = callback.call(thisArg, obj[k], k, obj)
      result[k] = tmp
    }
    k++
  }

  return result
}

// https://muyiy.cn/blog/6/6.3.html#array-prototype-map