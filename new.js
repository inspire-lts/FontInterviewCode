// 1.创建一个新的对象
// 2.继承构造函数原型上的方法
// 3. 执行构造函数

function myNew(func, ...arg) {
  let result = Object.create(func.prototype)
  let result1 = func.call(result, ...arg)
  return typeof result1 === "object" ? result1 : result
} 