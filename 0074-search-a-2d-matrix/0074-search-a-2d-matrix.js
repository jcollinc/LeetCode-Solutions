/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let row of matrix) {
        for (let val of row) {
            if (val === target) return true
        }
    }
    return false
};