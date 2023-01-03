/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let toDelete = 0
    let interval = strs[0].length
    for (let col = 0; col < interval; col++) {
        for (let row = 1; row < strs.length; row++) {
            if (strs[row][col] < strs[row-1][col]) {
                toDelete++
                break
            }
        }
    }
    return toDelete
};