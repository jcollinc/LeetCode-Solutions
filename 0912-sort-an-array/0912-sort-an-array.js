/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    if (nums.length < 2) return nums
    let mid = Math.floor(nums.length / 2)
    let leftArr = nums.slice(0, mid)
    let rightArr = nums.slice(mid)
    return merge(sortArray(leftArr), sortArray(rightArr))
};

function merge(leftArr, rightArr) {
    let sortedArray = [], l = 0, r = 0
    while (l < leftArr.length && r < rightArr.length) {
        sortedArray.push(leftArr[l] <= rightArr[r] ? leftArr[l++] : rightArr[r++])
    }
    return [...sortedArray, ...leftArr.slice(l), ...rightArr.slice(r)]
}

