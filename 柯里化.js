function curry(fn) {
  let judge = (...args) => {
      console.log(args)
      if (args.length == fn.length) return fn(...args)
      return (...arg) => { 
        console.log(arg) 
        return judge(...args, ...arg) }
  }
  return judge
}

function add(a, b, c) {
  return a + b + c
}
let addCurry = curry(add)
console.log(addCurry(1,2)(3))
