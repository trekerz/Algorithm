// 1.判断回文字符串
// 去除了非单词字符
function palindrome(str){
    // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
    var re = /[\W_]/g;
    // 将字符串变成小写字符,并干掉除字母数字外的字符
    var lowRegStr = str.toLowerCase().replace(re,'');

    // 如果字符串lowRegStr的length长度为0，字符串即是palindrome
    if(lowRegStr.length===0)
        return true;

    // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
    if(lowRegStr[0]!=lowRegStr[lowRegStr.length-1])
        return false;

    //递归
    return palindrome(lowRegStr.slice(1,lowRegStr.length-1));
}

var str = 'abuyryuba.';
console.log(palindrome(str));


// 2.反转字符串（方法一）
// 反向遍历字符串
function reverseString(str){
    var tmp = '';
    for(var i=str.length-1;i>=0;i--)
        tmp += str[i];
    return tmp;
}

var str = 'live for building something.';
console.log(reverseString(str));


// 3.反转字符串（方法二）
// 转化成array再反转
function reverseString2(str){
    var arr = str.split("");
    var i = 0,j = arr.length-1;
    while(i<j){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
    return arr.join("");
    return arr;
}

var str = 'live for building something.';
console.log(reverseString2(str));


// 4.生成指定长度随机字符串
function randomString(n){
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var tmp = '';
    for(var i=0;i<n;i++)
        tmp += str.charAt(Math.floor(Math.random()*str.length));
    return tmp;
}

console.log(randomString(6));


// 5.统计出现次数最多的字母
function findMaxDuplicateChar(str) {
    // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
    var re = /[\W_]/g;
    // 将字符串变成小写字符,并干掉除字母数字外的字符
    var str = str.replace(re,'');

    if(str.length == 1) {
        return str;
    }

    // 统计次数
    var charObj = {};
    for(var i = 0; i < str.length; i++) {
        if(!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;  // 字母还没统计过的情况
        } else {
            charObj[str.charAt(i)] += 1;  // 字母已存在的情况
        }
    }

    // 遍历寻找次数最多者
    var maxChar = [], times = 1;
    for(var k in charObj) {
        if(charObj[k] == times){  // 考虑了次数相同的情况
            maxChar.push(k);
        }
        if(charObj[k] > times) {
            maxChar = [];
            maxChar.push(k);
            times = charObj[k];
        }
    }
    return maxChar + '：' + times;
}

var str = 'live for building something.';
console.log(findMaxDuplicateChar(str));