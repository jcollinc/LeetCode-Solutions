/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = []
    for (let row = 0; row < m; row++) {
        dp[row] = new Array(n).fill(0)
        for (let col = 0; col < n; col++) {
            if (row === 0 && col === 0) {
                dp[row][col] = 1
                continue
            }
            let top = row-1 >= 0 ? dp[row-1][col] : 0
            let left = col-1 >= 0 ? dp[row][col-1] : 0
            dp[row][col] = top + left
        }
    }
    console.log(dp)
    return dp[m-1][n-1]
}