/*
	generator的自执行，但是是同步的，不是适合异步
*/
function* gen(){
	yield 1;
	yield 2;
	return 3;
}


function processGen(gen){
	var g = gen();
	var res = g.next();
	while(!res.done){
		console.log(res);
		res = g.next();
	}
}

function processGen2(gen){
	var iter = gen();
	for(var v of iter){
		console.log(v);
	}
}

processGen(gen);
// processGen2(gen);



