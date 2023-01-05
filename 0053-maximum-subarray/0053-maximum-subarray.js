/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity, currentSum = 0
    for (let i = 0; i < nums.length;) {
        currentSum += nums[i]
        maxSum = Math.max(currentSum, maxSum)
        if (currentSum <= 0) {
            currentSum = 0
        }
        i++
    }
    return maxSum
};