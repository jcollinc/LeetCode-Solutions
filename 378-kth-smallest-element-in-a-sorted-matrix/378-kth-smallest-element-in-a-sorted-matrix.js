/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let nums = []
    for (let arr of matrix) {
        for (let i = 0; i < arr.length; i++) {
            nums.push(arr[i])
        }
    }
    nums.sort((a,b) => a - b)
    return nums[k - 1]
};