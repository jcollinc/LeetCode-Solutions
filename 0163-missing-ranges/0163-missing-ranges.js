/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let curr = lower, res = []
    if (!nums.length) return [[lower, upper]]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != curr) {
            res.push([curr, nums[i]-1])
            curr = nums[i] + 1
        } else curr++
    }
    if (curr == upper) res.push([upper, upper])
    else if (curr < upper) res.push([curr, upper])
    return res
};