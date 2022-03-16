Function.prototype.myBind = function(context, ...arg1s) {
  let that = this;

  let func = function (...arg2s) {
    // this instanceof func绑定的函数被当做构造函数调用，this应该是他本身
    return that.call(this instanceof func ? this : context, ...arg1s, ...arg2s);
  };

  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  // func.prototype = this.prototype  // 不能这么写，会把绑定函数的原型改变
  func.prototype = Object.create(this.prototype);

  return func;
}

var people={
  sex:'man',
  age:27
}
function sayPeople(a,b){
  console.log(this.sex,this.age,a,b)
  return false
}
let tmp = sayPeople.myBind(people, 1)
tmp(2)
