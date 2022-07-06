/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    nums.sort((a, b) => a - b)
    let max = 0
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1 && nums[i] !== nums[i - 1]) {
            if (max > res) res = max 
            max = 1
        } else if (nums[i] === nums[i-1]) {
            continue
        } else {
            max++
        } 
    }
    
    return Math.max(res, max)
};