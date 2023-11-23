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

function deepObj2(obj, map = new WeakMap()) {
  if (map.get(obj)) return obj;

  if (obj instanceof Map) {
    const newMap = new Map();
    map.set(obj, true);

    obj.forEach((value, key) => {
      newMap.set(key, deepObj2(value, map));
    });

    return newMap;
  }

  if (obj instanceof Set) {
    const newSet = new Set();
    map.set(obj, true);

    obj.forEach(value => {
      newSet.add(deepObj2(value, map));
    });

    return newSet;
  }

  if (typeof obj === "object" && obj !== null) {
    map.set(obj, true);
    let result = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepObj2(obj[key], map);
      }
    }

    return result;
  } else {
    return obj;
  }
}


let test = [1, 2, {a: 2}, new Set([1, 2, 3])]
console.log(deepObj2(test))