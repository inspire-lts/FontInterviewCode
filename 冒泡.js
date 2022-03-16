function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        flag = true
      }
    }
    if (!flag) break
  }
}

let test = [4,1,2,5]
bubbleSort(test)
console.log(test)