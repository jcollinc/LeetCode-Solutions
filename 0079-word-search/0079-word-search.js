/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = false;
    var check = function(row, col, wordIdx) {
        if (!result) {
            if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;
            if (board[row][col] != word[wordIdx]) return; 
            if (wordIdx == word.length - 1) { 
                result = true;
                return;
            }
            board[row][col] = null;
            let directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let direction of directions) {
                check(row+direction[0],col+direction[1],wordIdx+1)
            }
            board[row][col] = word[wordIdx] 
        }
    }

    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] == word[0]) {
                check(i, j, 0)
                if (result) return result;
            }
        }
    }
    
    return result;
};