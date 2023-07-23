/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let height = grid.length, width = grid[0].length
    let dp = []
    for (let row = 0; row < height; row++) {
        let newRow = []
        dp.push(newRow)
        for (let col = 0; col < width; col++) {
            if (row === 0 && col === 0) {
                newRow.push(grid[0][0])
                continue
            }
            let top = row - 1 >= 0 ? dp[row-1][col] : Infinity
            let left = col - 1 >= 0 ? dp[row][col-1] : Infinity
            newRow.push(grid[row][col] + Math.min(top, left))
        } 
    }
    return dp[height-1][width-1]
}

