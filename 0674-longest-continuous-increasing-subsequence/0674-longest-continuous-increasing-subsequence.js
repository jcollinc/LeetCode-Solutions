/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let maxLength = 0
    for (let i = 0; i < nums.length;) {
        let start = i, end = i + 1
        while (nums[end] > nums[end - 1] && end < nums.length) {
            end++
        }
        maxLength = Math.max(maxLength, end - start)
        i = end
    }
    return maxLength
};