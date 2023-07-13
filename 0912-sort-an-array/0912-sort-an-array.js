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
    let sortedArray = []
    while (leftArr.length && rightArr.length) {
        sortedArray.push(leftArr[0] <= rightArr[0] ? leftArr.shift() : rightArr.shift())
    }
    return [...sortedArray, ...leftArr, ...rightArr]
}