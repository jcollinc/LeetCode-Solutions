/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) majority = nums[i]
        if (nums[i] === majority) count++
        else (count--)
    }
    return majority
};