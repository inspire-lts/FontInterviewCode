function deepObj(obj) {
  if (typeof obj === "object") {
    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if(obj.hasOwnProperty) {
        result[key] = deepObj(obj[key])
      }
    }
    return result
  } else {
    return obj
  }

}

function deepObj1(obj,  map = new WeakMap()) {
  if (map.get(obj)) return obj

  if (typeof obj === "object") {
    map.set(obj, true)
    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepObj1(obj[key])
      }
    }
    return result
  } else {
    return obj
  }
}

let test = [1, 2, {a: 2}]
console.log(deepObj(test))