/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n, fast = sumSquares(n)
    while (slow !== fast) {
        if (fast === 1) return true
        slow = sumSquares(slow)
        fast = sumSquares(sumSquares(fast))
    }
    return fast === 1
};

function sumSquares(n) {
    let sum = 0
    while (n > 0) {
        let toSquare = n % 10
        sum += toSquare**2
        n = Math.floor(n/10)
    }
    return sum
}