/*
	generator最基本是功能是生成iterator
*/
function* gen(){
	yield 1;
	yield 2;
	return 3;
}

var g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


