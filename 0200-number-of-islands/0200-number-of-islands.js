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

const bfs = (grid, row, col) => {
    let queue = [[row, col]]
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    while (queue.length) {
        let [r,c] = queue.shift()
        if (grid[r][c] === "0") continue
        for (let [rowDx, colDx] of directions) {
            if (inBound(grid, r+rowDx, c+colDx)) {
                queue.push([r+rowDx, c+colDx])
            }
        }
        grid[r][c] = "0"
    }
    return grid
}

const inBound = (grid, r,c) => {
    return (r >= 0 && c >= 0 && r < grid.length && c < grid[r].length)
}