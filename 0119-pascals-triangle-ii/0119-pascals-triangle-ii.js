/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let dp = []
    for (let i = 0; i <= rowIndex; i++) {
        dp[i] = [1]
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
        }
        dp[i][i] = 1
    }
    return dp[rowIndex]
};