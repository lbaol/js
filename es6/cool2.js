/*
  山寨co2
*/
function* gen(num){
 
  var a = yield Promise.resolve('a-resolve'+num);
  console.log(a);
  var b = yield Promise.resolve('b-resolve'+num);
  console.log(b);
  var c = yield Promise.resolve('c-resolve'+num);
  console.log(c);
  
}

//自动执行

function run(gen){
  function next(data){
    var res = gen.next(data);
    if(res.value.done == true) return;
    res.value.then(next);
  }

  next();

}


run(gen(1));
run(gen(2));
run(gen(3));
run(gen(4));
run(gen(5));
run(gen(6));
run(gen(7));
