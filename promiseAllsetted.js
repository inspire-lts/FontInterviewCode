function promiseSettled(promises) {
  let result = []

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(value => {
        result.push({
          status: "fullfiled",
          value
        })
        if (result.length === promises.length) {
          resolve(result)
        }
      },
      reason => {
        result.push({
          status: "rejected",
          reason
        })
        if (result.length === promises.length) {
          reject(result)
        }
      })
    }
  })
}