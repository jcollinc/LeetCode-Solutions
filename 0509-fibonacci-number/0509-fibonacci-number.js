/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fibSums = [0, 1]
    for (let i = 2; i <= n; i++) {
        fibSums[i] = fibSums[i-1] + fibSums[i-2]
    }
    return fibSums[n]
};