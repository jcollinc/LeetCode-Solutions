/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max = 0
    for (let char of n) max = Math.max(max, parseInt(char))
    return max
};