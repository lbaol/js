/*
  山寨co2
*/
function* gen(){
 
  var a = yield Promise.resolve('a-resolve');
  console.log(a);
  var b = yield Promise.resolve('b-resolve');
  console.log(b);
  var c = yield Promise.resolve('c-resolve');
  console.log(c);
  
}

//自动执行

function run(fn){

  var gen  = fn();

  onFulfilled();

  function onFulfilled(res){
    var ret = gen.next(res);
    
    next(ret)
  }

  function next(ret){
    if ( ret.done == true ) return;
    ret.value.then(onFulfilled)
  }

}


run(gen);
run(gen);