// 闭包的用途
// 1 函数作为返回值

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

// 2 函数作为参数被传递

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
