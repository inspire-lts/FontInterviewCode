function mySetInterval(func, wait) {
  let time = undefined
  function test() {
    time = setTimeout(test, wait)
    func()
  }
  setTimeout(test, wait)
  return time
}
