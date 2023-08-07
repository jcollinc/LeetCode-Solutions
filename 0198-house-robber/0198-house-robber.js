/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length
    let dp = new Array(n)
    dp[0] = nums[0]
    if (nums[1] !== undefined) dp[1] = nums[1]
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]-nums[i-1]+nums[i])
    }
    console.log(dp)
    return dp[n-2] ? Math.max(dp[n-1], dp[n-2]) : dp[n-1]
};