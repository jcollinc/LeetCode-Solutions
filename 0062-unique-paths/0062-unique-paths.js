/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let lastRow = new Array(n).fill(1)
    for (let row = 1; row < m; row++) {
        let nextRow = []
        for (let col = 0; col < n; col++) {
            let top = lastRow[col]
            let left = nextRow[col-1] || 0
            nextRow[col] = top + left
        }
        lastRow = [...nextRow]
    }
    return lastRow[n-1]
}