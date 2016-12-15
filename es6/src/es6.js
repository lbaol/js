/*
	测试es6能否运行
*/
console.log((x => x * 2)(1))

class Test {
  test() {
    return "test";
  }
}

var test = new Test;
console.log(test.test()); // "test"