/*
  co使用2，用co执行同步代码
*/
var co = require('co');

function* gen(){
  console.log(0)
  var a = yield Promise.resolve('a-resolve');
  console.log(1)
  console.log(a)
  yield 2;
  console.log(2)
  return 3;
}

co(gen);
console.log(4)