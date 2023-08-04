/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) { 
    let dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j - coins[i] < 0) continue
            dp[j] = Math.min(dp[j], (dp[j-coins[i]] + 1))
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};