/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) { 
    let dp = new Array(amount+1).fill(-1), res = 0
    dp[0] = 0
    for (let coin of coins) {
        for (let i = 1; i <= amount; i++) {
            if (i - coin < 0 || (coin !== i && dp[i-coin] === -1)) {
                res = dp[i]
                continue
            }
            dp[i] = dp[i] === -1 ? dp[i-coin] + 1 : Math.min(dp[i], dp[i-coin] + 1)
            res = dp[i]
        }
    }
    console.log(dp)
    return res
};