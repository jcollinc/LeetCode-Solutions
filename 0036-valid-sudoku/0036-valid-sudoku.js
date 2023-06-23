/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let rowSweep = board[i][j];
      let colSweep = board[j][i];
      let boxSweep = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (rowSweep != '.') {
        if (row.has(rowSweep)) return false;
        row.add(rowSweep);
      }
      if (colSweep != '.') {
        if (col.has(colSweep)) return false;
        col.add(colSweep);
      }
      
      if (boxSweep != '.') {
        if (box.has(boxSweep)) return false;
        box.add(boxSweep);
      } 
    }
  }
  return true
};