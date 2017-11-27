// 1.数组去重（方法一）
// 利用hash表。这种方法会认为1和'1'相同。
Array.prototype.unique1 = function (){
    var arr = this;
    var obj = {};
    var data = [];
    for(var i=0; i<arr.length; i++){
        if(!obj[arr[i]]){  // 若不在obj中
            obj[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
}
// 示例
var arr = [1,2,34,342,'1',2,3,5];
console.log(arr.unique1());


// 2. 数组去重（方法二）
// 利用数组的indexOf方法。这种方法认为1和'1'不同。
Array.prototype.unique2 = function (){
    var arr = this;
    var result = []; 
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
// 示例
var arr = [2,34,342,'1',2,3,5,1];
console.log(arr.unique2());


// 3.数组去重（方法三）
// 排序后比较相邻，如果一样则放弃，否则加入到result。
Array.prototype.unique3 = function (){
    var arr = this;
    arr.sort();
    var result=[arr[0]];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]) {
            result.push(arr[i]);
        }
    }
    return result;
}
// 示例
var arr = [1,2,34,342,'1',2,3,5];
console.log(arr.unique3());


// 4.数组顺序扰乱（方法一）
// 每次随机抽一个数并移动到新数组中
// 注意：此方法会删除原数组中所有项
Array.prototype.shuffle1 = function (){
    var arr = this;
    var copy = [],
        n = arr.length,
        i;
    // 如果还剩有元素则继续
    while (n) {
        // 随机抽取一个元素
        i = Math.floor(Math.random() * arr.length);
        // 如果这个元素之前没有被选中过。。
        if (i in arr) {
            copy.push(arr[i]);
            delete arr[i];
            n--;
        }
    }
    return copy;
}
// 示例
var arr = [1,2,34,342,'1',2,3,5];
console.log(arr.shuffle1());


// 5.数组顺序扰乱（方法二）
// 前面随机抽数依次跟末尾的数交换，后面依次前移，即：第一次前n个数随机抽一个跟第n个交换，第二次前n-1个数跟第n-1个交换，依次类推。
// 注意：此方法会改变原数组顺序
Array.prototype.shuffle2 = function (){
    var arr = this;
    var m = arr.length,
        temp, i;
    // 如果还剩有元素
    while (m) {
        // 随机选取一个元素
        i = Math.floor(Math.random() * m--);
        // 与当前元素进行交换
        temp = arr[m];
        arr[m] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
// 示例
var arr = [1,2,34,342,'1',2,3,5];
console.log(arr.shuffle2());


// 6.数组判断（三种方法）
// (1)自带的isArray方法
Array.isArray(arr);  // true

// (2)利用instanceof运算符
arr instanceof Array;  // true

// (3)利用toString的返回值
Array.prototype.isItArray = function (arr){
    return Object.prototype.toString.call(arr) === '[object Array]';
}


// 7.数组求交集
// 利用filter和数组自带的indexOf方法
Array.prototype.intersection = function (arr){
    return this.filter(function (item){
        return arr.indexOf(item) != -1;
    });
}
// 示例
var arr1 = [4,2,45,67,2,4,1];
var arr2 = [78,23,7,3,3,1,4];
console.log(arr1.intersection(arr2));


// 8.数组求并集
// 连接两个数组并去重
Array.prototype.arrUnique = function (arr){
    var a = this.concat(arr);
    var result = [];
    for(var i=0; i<a.length; i++){
        if(result.indexOf(a[i]) == -1){
            result.push(a[i]);
        }
    }
    return result;
}
// 示例
var arr1 = [4,2,45,67,2,4,1];
var arr2 = [78,23,7,3,3,1,4];
console.log(arr1.arrUnique(arr2));


// 9.数组求差集
// 利用filter和indexOf方法
Array.prototype.diff = function (a){
    return this.filter(function (item){
        return a.indexOf(item) == -1;
    });
}
// 示例
var arr1 = [4,2,45,67,2,4,1];
var arr2 = [78,23,7,3,3,1,4];
console.log(arr1.diff(arr2));


// 10.数字数组中最大差值
Array.prototype.getMaxProfit = function (){
    var arr = this;
    var min = arr[0], max = arr[0];
    for(var i = 0; i < arr.length; i++){  // 找到最大和最小
        if(arr[i]<min)
            min = arr[i];
        if(arr[i]>max)
            max = arr[i];
    }
    return max - min;
}
// 示例
var arr = [123,23,4,5,2,56];
console.log(arr.getMaxProfit());    