function throttle(fn, wait) {
  let pre = 0
  return function() {
    let that = this
    let arg = arguments
    let now = new Date()
    if (now - pre > wait) {
      fn.apply(that, arg)
      pre = now
    }
  }
}

function throttle1(fn, wait) {
  let time = null
  return function() {
    let that = this
    let arg = arguments
    if  (!time) {
      time = setTimeout(() => {
        fn.apply(that, arg)
        time = null
      }, wait)
    }
  }
}