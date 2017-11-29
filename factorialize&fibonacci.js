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


// 3.生成斐波那契数列（非递归）
/**
 * @param  {Number} n 项数
 * @return {Array}    数列数组
 */
function fibo1(n){
    var fiboarr = [];
    var i = 0;
    while (i < n){
        if (i <= 1){
            fiboarr.push(i);
        }else{
            fiboarr.push(fiboarr[i-1]+fiboarr[i-2]);
        }
        i++;
    }
    return fiboarr;
}
// 示例
console.log(fibo1(10));   // [0,1,1,2,3,5,8,13,21,34]


// 4.生成斐波那契数列（递归）
/**
 * @param  {Number} n 项数
 * @return {Array}    数列数组
 */
function fibo2(n){
    var getfib = function g(n){
        if (n < 2){
            return n;
        }else{
            return g(n-1) + g(n-2);
        }
    }

    var fiboarr = [];
    for(var i=0; i<n; i++){
        fiboarr.push(getfib(i));
    }
    return fiboarr;
}
// 示例
console.log(fibo2(10));   // [0,1,1,2,3,5,8,13,21,34]