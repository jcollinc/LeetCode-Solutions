/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let row = new Array(n).fill(1)
    for (i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            row[j] = (row[j] + (row[j-1] || 0))
        }
    }
    return row[n-1]
}