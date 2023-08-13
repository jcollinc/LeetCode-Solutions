/**
 * @param {number[]} nums
 * @return {boolean}
 */
const validPartition = (nums) => {
    let n = nums.length
    let dp = Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 2; i <= n; i++) {
        if (dp[i - 2] && nums[i - 2] == nums[i - 1]) dp[i] = true; 
        if (i-3 >= 0 && dp[i-3] 
            && nums[i-1] == nums[i-2] 
            && nums[i-2] == nums[i-3]
        ) dp[i] = true; 
        if (i - 3 >= 0 
            && dp[i-3] 
            && nums[i-1] - nums[i-2] == 1 
            && nums[i-2] - nums[i-3] == 1
        ) dp[i] = true; 
    }
    return dp[n];
};