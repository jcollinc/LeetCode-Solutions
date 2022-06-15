/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    if (!board) return board
    let length = board.length, width = board[0].length
    let stable = true
    
    // 1. Mark Rows
    for (let r = 0; r < length; r++) {
        for (let c = 0; c < width - 2; c++) {
            let num1 = Math.abs(board[r][c])
            let num2 = Math.abs(board[r][c + 1])
            let num3 = Math.abs(board[r][c + 2])
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1
                board[r][c + 1] = -num2
                board[r][c + 2] = -num3
                stable = false
            }
        }
    }
    // 2. Mark Columns
    for (let c = 0; c < width; c++) {
        for (let r = 0; r < length - 2; r++) {
            let num1 = Math.abs(board[r][c])
            let num2 = Math.abs(board[r + 1][c])
            let num3 = Math.abs(board[r + 2][c])
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
            board[r][c] = -num1
            board[r + 1][c] = -num2
            board[r + 2][c] = -num3
            stable = false
            }
        }
    }
    // 3. What Goes Up...
    if (!stable) {
        for (let c = 0; c < width; c++) {
            let idx = length - 1;
            for (let r = length - 1; r >= 0; r--) {
                if (board[r][c] > 0) {
                    board[idx][c] = board[r][c];
                    idx--;
                }
            }
            for (let r = idx; r >= 0; r--) {
                board[r][c] = 0;
            }
        }
    }
    
    // 4. Return Board (Or Not)
    if (stable) return board
    else return candyCrush(board)
};