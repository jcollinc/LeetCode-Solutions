/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0, n = nums.length
    function recurse (array, idx) {
        if (idx >= n) return
        nums[idx] += sum
        sum = nums[idx]
        recurse(nums, idx+1)
    }
    recurse(nums, 0)
    return nums
};