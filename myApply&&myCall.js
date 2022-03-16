Function.prototype.myApply = function(context, args) {
  context = context || window
  // this为调用的方法
  context.fn = this
  let result = context.fn(...args)
  delete context.fn

  return result
}

Function.prototype.myCall = function(context, ...args) {
  context = context || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn

  return result
}

var people={
  sex:'man',
  age:27
}
function sayPeople(a,b){
  console.log(this.sex,this.age,a,b)
  return false
}
sayPeople.myCall(people,2,3)
sayPeople.myApply(people, [2,3])
