/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1, left = 0
    let res = [], size = matrix.length * matrix[0].length
    let sizeCheck = () => res.length < size
    while (res.length < size) {
        for (let col = left; col <= right && sizeCheck(); col++) {
            res.push(matrix[top][col])
        }
        top++
        for (let row = top; row <= bottom && sizeCheck(); row++) {
            res.push(matrix[row][right])
        }
        right--
        for (let col = right; col >= left && sizeCheck(); col--) {
            res.push(matrix[bottom][col])
        }
        bottom--
        for (let row = bottom; row >= top && sizeCheck(); row--) {
            res.push(matrix[row][left])
        }
        left++
    }
    return res
};