/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0, right = (matrix.length * matrix[0].length) - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        let mid1 = Math.floor(mid/matrix[0].length), mid2 = mid%matrix[0].length
        if (matrix[mid1][mid2] === target) return true
        else matrix[mid1][mid2] > target ? right = mid-1 : left = mid+1
    }
    return false
};