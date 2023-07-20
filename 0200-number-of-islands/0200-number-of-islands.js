/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1") {
                islandCount++
                grid = bfs(grid, row, col)
            }
        }
    }
    return islandCount
};

function bfs(grid, startRow, startCol) {
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    let queue = [[startRow,startCol]]
    while (queue.length) {
        let [row,col] = queue.shift()
        if (grid[row][col] === "0") continue
        for (let [dy,dx] of directions) {
            if (row+dy >= 0 
                && row+dy < grid.length
                && col+dx >= 0
                && col+dx < grid[row].length
            ) queue.push([row+dy, col+dx])
        }
        grid[row][col] = "0"
    }
    return grid
}