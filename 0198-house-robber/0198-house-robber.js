/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let n = nums.length
    let dp = new Array(n)
    dp[0] = nums[0], dp[1] = nums[1]
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]-nums[i-1]+nums[i])
    }
    return Math.max(dp[n-1], dp[n-2])
};