/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let height = grid.length, width = grid[0].length
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (row === 0 && col === 0) continue
            let top = row - 1 >= 0 ? grid[row-1][col] : Infinity
            let left = col - 1 >= 0 ? grid[row][col-1] : Infinity
            grid[row][col] += Math.min(top, left)
        }
    }
    return grid[height-1][width-1]
}

