function getPromise(){
	return new Promise(function(resolve,reject) {
		console.log('prom');
		setTimeout(function () {
			resolve('done')
		},2000)
		
	})

}
	


getPromise().then(function(data) {
	console.log(data)
})