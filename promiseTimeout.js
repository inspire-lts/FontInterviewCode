function promiseTimeout(func, wait) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, wait)
  }).then(value => {
    throw new Error("Timeout")
  })

  return Promise.race[func, p]
}