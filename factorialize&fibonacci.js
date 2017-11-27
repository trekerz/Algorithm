// 1.阶乘（非递归）
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


// 2.阶乘（递归）
function factorialize2(num){
    if (num < 2){
        return 1;
    }else{
        return num * factorialize2(num-1);
    }
}


// 3.生成斐波那契数列（非递归）
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


// 4.生成斐波那契数列（递归）
function fibo2(n){
    var getfib = function (n){
        if (n < 2){
            return n;
        }else{
            return arguments.callee(n-1) + arguments.callee(n-2);
        }
    }

    var fiboarr = [];
    for(var i=0; i<n; i++){
        fiboarr.push(getfib(i));
    }
    return fiboarr;
}