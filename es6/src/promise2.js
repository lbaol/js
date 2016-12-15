/*
  Promise的使用2
*/

var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 4000)
})

var p2 = new Promise(function (resolve, reject) {
  resolve(1)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))