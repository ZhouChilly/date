// 递归思想： 将一个未知问题转化为一个已解决的问题来实现
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1)
}
factorial(5) // 5 * 4 * 3 * 2 * 1 = 120

// 尾递归，可以避免不断的将函数压栈最终导致堆栈溢出。通过设置一个累加参数，并且每一次都将当前的值累加上去，然后递归调用
function factorial(n, total = 1) {
  if (n === 0) {
    return total
  }

  return factorial(n - 1, n * total)
}

// 求 1,3,5,7,9,...第n项的结果和前n项和,序号从0开始

// 假设sum(n)是前n项的和

// 递归关系
foo(n) = foo(n-1)+2
// 递归体
function foo () {
  return foo(n) = sum(n-1)+2
}
// 临界条件
n === 1
foo(1) = 1
// 递归函数
function foo (n) {
  if(n===0) return 1
  return foo(n) + sum(n -1)
}