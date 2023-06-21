/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat
    let reshapedArray = []
    let nextRow = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            nextRow.push(mat[i][j])
            if (nextRow.length === c) {
                reshapedArray.push(nextRow)
                nextRow = []
            }
        }
    }
    return reshapedArray
};