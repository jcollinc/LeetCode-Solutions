/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let first = 0, second = 1
    for (let i = 2; i <= n; i++) {
        temp = first + second
        first = second
        second = temp
    }
    return n < 2 ? n : second
};