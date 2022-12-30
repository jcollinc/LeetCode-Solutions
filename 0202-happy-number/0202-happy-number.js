/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, seenSet = new Set()) {
    if (seenSet.has(n)) return false
    else seenSet.add(n)
    let nString = n.toString()
    let sum = 0
    for (let numString of nString) {
        num = parseInt(numString)
        sum += (num * num) 
    }
    if (sum === 1) return true
    return isHappy(sum, seenSet)
};