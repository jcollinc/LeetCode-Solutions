/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    if (weight.reduce((a, b) => a + b) <= 5000) return weight.length
    let res = 0
    let total = 0
    weight.sort((a, b) => a - b)
    for (w of weight) {
        if (total + w <= 5000) {
            total += w
            res++
        }
    }
    return res
};