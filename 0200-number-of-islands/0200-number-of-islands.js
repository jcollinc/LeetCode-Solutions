/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0, m = grid.length, n = grid[0].length
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === "1") {
                islandCount++
                grid = bfs(grid, row, col)
            }
        }
    }
    return islandCount
}

function bfs(grid, row, col) {
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    let visited = new Set()
    let queue = [[row,col]]
    while (queue.length) {
        let [row, col] = queue.pop()
        visited.add(`${row}${col}`)
        grid[row][col] = 0
        for (let [dy,dx] of directions) {
            if (inBounds(row+dy, col+dx, grid.length, grid[0].length) && grid[row+dy][col+dx] === "1") {
                queue.push([row+dy, col+dx])
            }
        }
    }
    return grid
}

function inBounds(row, col, m, n) {
    return row >= 0 && col >= 0 && row < m && col < n
}