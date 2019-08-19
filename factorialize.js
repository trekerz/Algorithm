// 1.阶乘（非递归）
/**
 * @param  {Number} num 自然数
 * @return {Number}     阶乘结果
 *
 * **示例代码**
 * ```javascript
 *    console.log(factorialize1(5)) // 120
 * ```
 */
function factorialize1(num) {
  var result = 1
  if (num < 2) {
    return 1
  }
  while (num > 1) {
    result *= num--
  }
  return result
}

// 2.阶乘（递归）
/**
 * @param  {Number} num 自然数
 * @return {Number}     阶乘结果
 *
 * **示例代码**
 * ```javascript
 *    console.log(factorialize2(5)) // 120
 * ```
 */
function factorialize2(num) {
  if (num < 2) {
    return 1
  } else {
    return num * factorialize2(num - 1)
  }
}
