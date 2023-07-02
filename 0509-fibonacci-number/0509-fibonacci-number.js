/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let dp = [0,1]
    let res = dp[n]
    for (let i = 2; i <= n; i++) {
        let sum = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = sum
        res = dp[1]
    }
    return res
};