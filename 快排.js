function fastSort(arr) {
  fast(arr, 0, arr.length - 1)

  return arr
}

function fast(arr, left, right) {
  if (left >= right)  return
  let partionIndex = partion(arr, left, right);
  fast(arr, left, partionIndex - 1)
  fast(arr, partionIndex + 1, right)
}

function partion(arr, left, right) {
  let target = arr[right]
  let tmp = left
  
  for (let i = left; i < right; i++) {
    if (arr[i] < target) {
      [arr[tmp], arr[i]] = [arr[i], arr[tmp]]
      tmp++
    }
  }
  [arr[tmp], arr[right]] = [arr[right], arr[tmp]]

  return tmp
}

let test = [2,5,1,3]

console.log(fastSort(test))

function quickSort(arr) {
   quick(arr, 0, arr.length - 1)
   return arr
}

function quick(arr, left, right) {
  if (left > right)    return 
  let indexPart = part(arr, left, right)
  quick(arr, left, indexPart - 1)
  quick(arr, indexPart + 1, right)
}

function part(arr, left, right) {
  let target = arr[right]
  let tmp = left
  
  for (let i = left; i <= right; i++) {
      if (arr[i] < target) {
          [arr[i], arr[tmp]] = [arr[tmp], arr[i]]
          tmp++
      }
  }
  
  [arr[tmp], arr[right]] = [arr[right], arr[tmp]]
  return tmp
}
console.log(quickSort(test))