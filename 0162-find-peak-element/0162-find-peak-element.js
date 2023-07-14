/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length <=1) return 0
    for (let i = 0; i < nums.length; i++) {
        if (
            ((nums[i] > nums[i-1]) && (nums[i] > nums[i+1]))
            || (i === 0 && nums[i] > nums[i+1]) || (i === nums.length - 1 && nums[i] > nums[i-1])
        ) return i
    }
};