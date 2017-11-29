// 1.冒泡排序
// (1)把数组中的数从左到右两两对比，每次都把大者放在右边，小者放在左边，直到到达数组尾部，算作第一轮对比，这时的数组尾部就是整个数组中的最大者。
// (2)循环以上过程，经过length-1轮对比后数组就排好序了。
/**
 * @return {Array} 原数组排序结果
 */
Array.prototype.bubbleSort = function (){
    var arr = this;
    for(var i = 1; i < arr.length; i++){  // 共有(i=length-1)轮排序
        for(var j = 0; j < arr.length-i; j++){  // 每轮排序有(j=length-i)次对比
            var temp = 0;
            if(arr[j] > arr[j+1]){  // 每次对比都把大者放在小者的右边
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// 示例
var a = [100,3,45,7,34,67,8];
console.log(a.bubbleSort());   // [3,7,8,34,45,67,100]

// 2.快速排序
// (1)选择左右两个哨兵i、j以及基准数x，分别让i、j从数组头部和尾部向中间前进。
// (2)当i遇到比x大的数时便停下来，当y遇到比x小的数时也停下来，把这两个数交换位置，之后i、j继续向中间前进。
// (3)循环第2步，直到i和j碰头为止，这时，把基准数放置在碰头处。此时以基准数为中心可以把数组分成左、右两个部分。
// (4)单独对左、右两个部分进行步骤1、2、3的处理（递归），直到细分出来的部分只剩一个数为止，此时排序完毕。
/**
 * @param  {Number} l 左哨兵索引
 * @param  {Number} r 右哨兵索引
 * @return {Array} 原数组排序结果
 */
Array.prototype.quickSort = function q(l,r){
    var arr = this;
    if(l < r){
        var i = l, j = r, x = arr[i];
        // 一轮i与j的相互改写，直到ij碰头
        while(i<j){
            // 哨兵j向左移动
            while(i<j && arr[j]>x)
                j--;
            if(i<j)
                //这里用i++，因为被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
                arr[i++] = arr[j];
            
            // 哨兵i向右移动
            while(i<j && arr[i]<x)
                i++;
            if(i<j)
                //这里用j--，因为被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
                arr[j--] = arr[i];
        }
        arr[i] = x;  //一轮调换进行完毕
        
        q.call(arr, l, i-1);
        q.call(arr, i+1, r);
    }
    return arr;
}
// 示例
var a = [3,1,45,2,9,27,16,1,13,2,8];
console.log(a.quickSort(0,a.length-1));   // [1,1,2,2,3,8,9,13,16,27,45]


// 3.选择排序
// (1)从左边开始进行两数对比，每次对比后取小者再与右边对比，如此一轮之后便会得到数组中的最小者，把此轮对比中的第一个数与所得的最小者置换位置。
// (2)每轮对比之后向右前进一个数，作为下一轮对比的第一个数，循环步骤1，经过length-1轮对比后数组就变成有序的了。
/**
 * @return {Array} 原数组排序结果
 */
Array.prototype.selectionSort = function (){
    var arr = this;
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
// 示例
var a = [3,1,45,2,9,27,16,1,13,2,8];
console.log(a.selectionSort());   // [1,1,2,2,3,8,9,13,16,27,45]


// 4.插入排序
// (1)从第二个数（这里称为当前数）开始，把它轮流跟它前面的每一个数进行对比（这样可以保证当前数之前的所有数是有序的），比当前数大的数都往后移动一位。
// (2)直到有一个不大于它的数（或此次对比已到达数组头部），这时便停止对比，把当前数插入到该数后面。这样算作一轮对比。这个过程类似扑克牌插牌整理的过程。
// (3)每轮对比完毕后把当前数向后移动一位，循环步骤1和2，这样一直对比length-1轮后数组就变成有序的了。
/**
 * @return {Array} 原数组排序结果
 */
Array.prototype.insertionSort = function (){
    var arr = this;
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
// 示例
var a = [3,1,45,2,9,27,16,1,13,2,8];
console.log(a.insertionSort());   // [1,1,2,2,3,8,9,13,16,27,45]


// 5.堆排序
// 包括大顶堆和小顶堆
// (1)先把数组转化为一个完全二叉树（建立大顶堆）。
// (2)然后进行堆调整，通过父节点和左右子节点的对比，把大者调整到父节点位置，小者调整到子节点位置。
// (3)最后按顺序输出这棵二叉树。
/**
 * @return {Array} 原数组排序结果
 */
Array.prototype.heapSort = function (){
    var arr = this;

    var len;  //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

    // 建立大顶堆
    function buildMaxHeap(arr){
        len = arr.length;
        for (var i = Math.floor(len/2); i >= 0; i--) {
            heapify(arr, i);
        }
    }

    // 堆调整
    function heapify(arr, i){
        var left = 2 * i + 1,
            right = 2 * i + 2,
            largest = i;

        if (left < len && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < len && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest != i) {
            swap(arr, i, largest);
            heapify(arr, largest);
        }
    }

    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    // 开始排序
    buildMaxHeap(arr);

    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}
// 示例
var a = [3,1,45,2,9,27,16,1,13,2,8];
console.log(a.heapSort());   // [1,1,2,2,3,8,9,13,16,27,45]