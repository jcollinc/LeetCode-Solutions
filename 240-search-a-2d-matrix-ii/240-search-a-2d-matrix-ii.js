/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1
    let column = 0
    while (matrix[row][column] && matrix[row][column] !== target) {
        if (matrix[row][column] > target) {
            row--
            if (row < 0) return false
        }
        else if (matrix[row][column] < target) {
            column++
            if (column > matrix[0].length) return false
        }
    }
    return matrix[row][column] === target
};