function promiseAll(promises) {
  let result = []
  let len = promises.length
  let count = 0

  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(value => {
        result[i] = value
        count++
        if (count === len) {
          resolve(result)
        }
      },
      reason => reject(reason))
    }
  })
}

let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);

promiseAll([p1, p2]).then(value => {
    console.log(value)
}).catch(reason => {
    console.log(reason)
})