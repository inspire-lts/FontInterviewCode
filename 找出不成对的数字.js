const arr = [1,3,27,3,1]

function singleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        flag = false
        break
      }
    }
    if (flag) {
      return arr[i]
    }
  }
}

console.log(singleNumber(arr))