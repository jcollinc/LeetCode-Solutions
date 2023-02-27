/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false
    let curr = 0, idx = 0
    while (curr < n) {
        curr = 3**idx
        idx++
    }
    return curr === n
};