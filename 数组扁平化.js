let arr = [1,[2], [2, [3, 4]]]

console.log(arr.flat(Infinity))

function myFlat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur)
  }, [])
}
console.log(myFlat(arr))

