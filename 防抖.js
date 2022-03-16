function debounce(fn, wait) {
  let time = null

  return function() {
    if (time) clearTimeout(time)
    let that = this
    let arg = arguments
    time = setTimeout(() => {
      fn.apply(that, arg)
    }, wait)
  }
}

function debounce1(fn, wait, immedate) {
  let time = null
  return function() {
    if (time) clearTimeout(time)
    let that = this
    let arg = arguments
    if (immedate) {
      let now = !time
      time = setTimeout(() => {
        time = null
      }, wait)
      if (now) {
        fn.apply(that, arg)
      }
    }
    else {
      time = setTimeout(() => {
        fn.apply(that, arg)
      })
    }
  }
}