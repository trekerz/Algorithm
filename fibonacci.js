// 1.生成斐波那契数列（非递归）
/**
 * @param  {Number} n 项数
 * @return {Array}    数列数组
 */
function fibo1(n) {
  var fiboarr = []
  var i = 0
  while (i < n) {
    if (i <= 1) {
      fiboarr.push(i)
    } else {
      fiboarr.push(fiboarr[i - 1] + fiboarr[i - 2])
    }
    i++
  }
  return fiboarr
}
// 示例
console.log(fibo1(10)) // [0,1,1,2,3,5,8,13,21,34]

// 2.生成斐波那契数列（递归）
/**
 * @param  {Number} n 项数
 * @return {Array}    数列数组
 */
function fibo2(n) {
  var getfib = function g(n) {
    if (n < 2) {
      return n
    } else {
      return g(n - 1) + g(n - 2)
    }
  }

  var fiboarr = []
  for (var i = 0; i < n; i++) {
    fiboarr.push(getfib(i))
  }
  return fiboarr
}
// 示例
console.log(fibo2(10)) // [0,1,1,2,3,5,8,13,21,34]
