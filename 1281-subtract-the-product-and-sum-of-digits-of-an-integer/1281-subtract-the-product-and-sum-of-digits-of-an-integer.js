/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0, mult = 1
    n = n.toString()
    for (let num of n) {
        sum += parseInt(num)
        mult *= parseInt(num)
    }
    return mult - sum
};