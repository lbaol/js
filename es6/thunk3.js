/*
	Thunk函数替换多参数函数，将其替换成单参数的版本，且只接受回调函数作为参数。
	任何函数，只要参数有回调函数，就能写成Thunk函数的形式
*/

var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

var gen = function* (){
  var r1 = yield readFile('package.json');
  console.log(r1.toString());
  var r2 = yield readFile('es6.js');
  console.log(r2.toString());
};

// 手工执行
// var g = gen();

// var r1 = g.next();
// r1.value(function(err, data){
//   if (err) throw err;
//   var r2 = g.next(data);
//   r2.value(function(err, data){
//     if (err) throw err;
//     g.next(data);
//   });
// });


function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}


run(gen);