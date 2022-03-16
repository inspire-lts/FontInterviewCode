function shuffle(arr) {
  let len = arr.length - 1
  
  while (len >= 0) {
    let randomIndex = Math.floor(Math.random() * (len + 1)); 
    [arr[randomIndex], arr[len]] = [arr[len], arr[randomIndex]]
    len--
  }

  return arr
}

let arr = [1,2,3,4]
console.log(shuffle(arr))