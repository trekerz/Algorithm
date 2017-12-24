// 1.阶乘（非递归）
/**
 * @param  {Number} num 自然数
 * @return {Number}     阶乘结果
 */
function factorialize1(num){
    var result = 1;
    if (num < 2){
        return 1;
    }
    while (num > 1){
        result *= num--;
    }
    return result;
}
// 示例
console.log(factorialize1(5));   // 120


// 2.阶乘（递归）
/**
 * @param  {Number} num 自然数
 * @return {Number}     阶乘结果
 */
function factorialize2(num){
    if (num < 2){
        return 1;
    }else{
        return num * factorialize2(num-1);
    }
}
// 示例
console.log(factorialize2(5));   // 120
