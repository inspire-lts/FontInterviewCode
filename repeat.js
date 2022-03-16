function repeat(func, times, wait) {
  return function(arg) {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        func(arg)
      }, wait * i)
    }
  }
}

let funcResult = repeat(console.log, 5, 1000)
funcResult("hello")