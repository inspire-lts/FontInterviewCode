let arr = [1,1,2,3,4,4,5, '1']

console.log([...new Set(arr)])

function unique1(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

console.log(unique1(arr))

function unique2(arr) {
  return arr.reduce((pre, current) => {
    if (!pre.includes(current)) {
      pre.push(current)
    }
    return pre
  }, [])
}

console.log(unique2(arr))

