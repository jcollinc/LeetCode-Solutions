/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let arr = []
    for (let char of n) arr.push(parseInt(char))
    return Math.max(...arr)
};