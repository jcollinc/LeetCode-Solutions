/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0]
    nums.sort((a,b) => a - b) 
    for (let i = 0; i < nums.length - 1;) {
        if (nums[i] !== nums[i+1]) return nums[i]
        i += 2
    }
    return nums[nums.length - 1]
};