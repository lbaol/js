/*
  有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
  特点：
  	（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。
  	（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
  缺点：
  	一旦新建它就会立即执行，无法中途取消
  	如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
*/

/*
	Promise对象是一个构造函数，用来生成Promise实例。
*/

var promise = new Promise(function(resolve,reject) {
	console.log('promise start');
	setTimeout(function () {
		resolve('done')
		// reject('err')
	},2000)
	
})	


promise.then(function(data) {
	console.log(data)
},function(err) {
	console.log(err)
},)