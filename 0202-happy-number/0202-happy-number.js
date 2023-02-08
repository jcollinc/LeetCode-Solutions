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
    let num = n.toString()
    for (let char of num) {
        sum += (parseInt(char) ** 2)
    } 
    return sum
}