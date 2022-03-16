function promiseAny(promises) {
  let count = 0
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(value => {
        resolve(value)
      },
      reason => {
        count++
        if (count === promises.length) {
          reject(new AggregateError('All promises were rejected'))
        }
      })
    })
  })
}