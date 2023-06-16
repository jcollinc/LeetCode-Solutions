/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let output = []
    let start = 0, mid = n
    for (let i = 0; i < 2 * n; i++) {
        output[i] = nums[start]
        output[i+1] = nums[mid]
        start++, mid++, i++
    }
    return output
};