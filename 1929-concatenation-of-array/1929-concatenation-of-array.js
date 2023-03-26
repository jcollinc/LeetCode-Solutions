/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let i = 0, j = nums.length, n = nums.length
    while (i < n) {
        nums[j] = nums[i]
        i++, j++
    }
    return nums
};