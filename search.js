// 1.二分查找（非递归）
/**
 * 注意：数组应该是有序数组。
 * @param  {Number} key 要查找的数
 * @return {Number}     结果索引 / -1
 */
Array.prototype.binarySearch = function (key){
    var arr = this;
    var low = 0,
        high = arr.length - 1;
    while (low <= high){
        var mid = parseInt((high + low) / 2);
        if (key == arr[mid]){
            return mid;
        }else if (key > arr[mid]){
            low = mid + 1;
        }else if (key < arr[mid]){
            high = mid - 1;
        }
    }
    return -1;
}
// 示例
var a = [2,4,6,14,23,25,36,39];
console.log(a.binarySearch(25));   // 5


// 2.二分查找（递归）
// low: 开始查找的位置。
// high: 结束查找的位置。
// key: 要查找的数。
// 返回: 位置或-1。
/**
 * @param  {Number} low  开始查找的位置索引
 * @param  {Number} high 结束查找的位置索引
 * @param  {Number} key  要查找的数
 * @return {Number}      结果索引 / -1
 */
Array.prototype.binarySearch_recursion = function bs_r(low, high, key){
    var arr = this;
    if (low > high){
        return -1;
    }
    var mid = parseInt((high + low) / 2);
    if (key == arr[mid]){
        return mid;
    }else if (key > arr[mid]){
        return bs_r(mid+1, high, key);
    }else if (key < arr[mid]){
        return bs_r(low, mid-1, key);
    }
    return -1;
}
// 示例
var a = [2,4,6,14,23,25,36,39];
console.log(a.binarySearch_recursion(2,4,25));