/*
	Thunk函数替换多参数函数，将其替换成单参数的版本，且只接受回调函数作为参数。
	任何函数，只要参数有回调函数，就能写成Thunk函数的形式
*/

var thunkify = require('thunkify');
var fs = require('fs');

function sum(a,b,callback){
	let s = a + b ;
	callback(s)
}



var sumThunk = thunkify(sum);
sumThunk(1,2)(console.log)