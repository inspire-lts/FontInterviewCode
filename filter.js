function myFilter(callback, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError('cannot read filter of null or undefined')
  }
  if (Object.prototype.toString.call(callback) !== "[object Function]") {
    throw new TypeError(callback + "is not a function")
  }

  let obj = Object(this)
  let result = []
  let k = 0
  let len = obj.length

  while (k < len) {
    if (k in obj) {
      if(callback.call(thisArg, obj[k], k, obj)) {
        result.push(obj[k])
      }
    }
    k++
  }

  return result
}