/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //helper function to check 3x3 grid
    function checkGrid (row, col) {
        let seen = new Set()
        for (let i = row; i < row + 3; i++) {
            for (let j = col; j < col + 3; j++) {
                let curr = board[i][j]
                if (seen.has(curr)) return false
                else if (curr !== ".") seen.add(curr)
            }
        }
        return true
    }
    //Check rule-break in row
    for (let row of board) {
        let seen = new Set()
        for (let num of row) {
            if (seen.has(num)) return false
            else if (num !== ".") seen.add(num)
        }
    }
    //Check rule-break in column
    for (let col = 0; col < board[0].length; col++) {
        let seen = new Set()
        for (let row = 0; row < board.length; row++) {
            let curr = board[row][col]
            if (seen.has(curr)) return false
            else if (curr !== ".") seen.add(curr)
        }
    }
    //Check rule-break in 3x3 grid
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (row % 3 === 0 && col % 3 === 0) {
                if (!checkGrid(row, col)) return false
            }
        }
    }
    return true
};