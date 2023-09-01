/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let count = 0, res = []
    while (count <= n) {
        res.push(count.toString(2).split("").filter(char => char === '1').length)
        count++
    }
    return res
};