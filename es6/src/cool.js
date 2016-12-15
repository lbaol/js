/*
  山寨co1
*/

function* gen(){
 
  var a = yield Promise.resolve('a-resolve');
  console.log(a);
  var b = yield Promise.resolve('b-resolve');
  console.log(b);
  var c = yield Promise.resolve('c-resolve');
  console.log(c);
  
}

//手工执行
var a = gen()
a.next().value.then(function(data){
	a.next(data).value.then(function(data){
		a.next(data).value.then(function(data){
			console.log(a.next(data))
		})
	})
})


