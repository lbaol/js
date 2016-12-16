/*
  co使用3,co多个generator函数，会是什么效果
*/
var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);
var co = require('co');


var gen1 = function* (num){
  console.log('task '+ num +'in gen1');
  var r1 = yield readFile('task '+ num +'file1.txt');
  console.log(r1.toString());
  var r2 = yield readFile('task '+ num +'file2.txt');
  console.log(r2.toString());
};


var gen2 = function* (num){
  console.log('task '+ num +'in gen2');
  var r2 = yield readFile('task '+ num +'file3.txt');
  console.log(r2.toString());
  var r1 = yield readFile('task '+ num +'file4.txt');
  console.log(r1.toString());
};

for(var i = 0 ;i < 2 ; i++){
	co(gen1)
	co(gen2)
	console.log('run------------'+i);
}
