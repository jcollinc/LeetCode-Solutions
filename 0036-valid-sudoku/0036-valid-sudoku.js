/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Map()
    let cols = new Map()
    let grids = new Map()
    let grid = '00'
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            rows.set(row, new Set())
            cols.set(col, new Set())
            if (row % 3 === 0 && col % 3 === 0) grids.set(`${row}${col}`, new Set())
        }
    }

    for (let row = 0; row < board.length; row++) {
        if (row % 3 === 0) grid = `${row}` + grid.slice(0, 1);
        for (let col = 0; col < board[0].length; col++) {
            if (col % 3 === 0) grid = grid.slice(0, -1) + `${col}`;
            let curr = board[row][col]
            if (curr === '.') continue
            if (
                rows.get(row).has(curr) || 
                cols.get(col).has(curr) ||
                grids.get(grid).has(curr)
            ) return false
            else {
                rows.set(row, rows.get(row).add(curr))
                cols.set(col, cols.get(col).add(curr))
                grids.set(grid, grids.get(grid).add(curr))
            }
        }
    }
    console.log(rows, cols, grids)
    return true
};