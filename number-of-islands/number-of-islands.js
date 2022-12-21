/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands (grid) {
    let islandCount = 0
    let m = grid.length, n = grid[0].length
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === "1") {
                islandCount++
                explore(grid, row, col)
            }
        }
    }
    return islandCount
};

function explore (grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] == "0") return
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    grid[row][col] = 0
    for (let [dx, dy] of directions) {
        explore(grid, row+dx, col+dy)
    }
}