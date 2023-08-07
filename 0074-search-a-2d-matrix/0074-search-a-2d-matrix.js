/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length
    let left = 0, right = m-1, row
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        console.log(left, right, mid)
        let start = matrix[mid][0], end = matrix[mid][n-1]
        if (start <= target && end >= target) {
            row = mid
            break
        } else end < target ? left = mid+1 : right = mid-1
    }
    if (row === undefined || row >= m) return false
    left = 0, right = n-1
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        let candidate = matrix[row][mid]
        if (candidate === target) return true
        else candidate > target ? right = mid-1 : left = mid+1
    }
    return false
};