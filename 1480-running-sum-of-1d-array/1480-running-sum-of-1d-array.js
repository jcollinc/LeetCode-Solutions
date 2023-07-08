/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    function recurse(array, idx) {
        if (idx >= nums.length) return
        nums[idx] = nums[idx] + sum
        sum = nums[idx]
        recurse(nums, idx + 1)
    }
    recurse(nums, 0)
    return nums
};