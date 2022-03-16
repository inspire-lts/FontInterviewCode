for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 2000)
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 2000)
}

// for (var i = 0; i < 5; i++) {
//   setTimeout((i) => {
//     console.log(i)
//   }, 2000, i)
// }

// for (var i = 0; i < 5; i++) {
//   ((i) =>setTimeout(() => {
//     console.log(i)
//   }, 2000))(i)
// }

