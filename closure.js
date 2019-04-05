// 闭包的用途
// 1 闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作
function foo() {
	var secret = 'secret';
	return {
		getSecret: function() {
			return sercet;
		},
		setSecret: function(newSecret) {
			secret = newSecret;
		}
	}
}
foo.getSecret(); // 'secret'
foo.setSecret('newSecret');
foo.getSecret(); // 'newSecret'

// 2 函数作为返回值
function outer() {
	var local = 2;
	function inner() {
		return local;
	}
	return inner;
}
var fn = outer();
console.log(fn());  //2
console.log(local); //local is not defined, 直接访问报错

// 3 函数作为参数被传递
function outer() {
	var local = 'zhou';
	function inner() {
		console.log('zhou');
	}
	fn(inner);
}
function fn(args) {
	args();
}
outer(); //'zhou'


