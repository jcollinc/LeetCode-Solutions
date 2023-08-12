/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0
    let n = obstacleGrid.length, m = obstacleGrid[0].length
    let dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(m)
    }
    dp[0][0] = 1
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (row === 0 && col === 0) continue
            else if (obstacleGrid[row][col] === 1) dp[row][col] = 0
            else if (row === 0) dp[row][col] = dp[row][col-1] ? 1 : 0  
            else if (col === 0) dp[row][col] = dp[row-1][col] ? 1 : 0
            else dp[row][col] = dp[row-1][col] + dp[row][col-1]
        }
    }
    console.log(dp)
    return dp[n-1][m-1]
};