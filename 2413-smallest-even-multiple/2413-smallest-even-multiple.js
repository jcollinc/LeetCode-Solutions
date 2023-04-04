/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if (n % 2 === 0) return n
    while (true) {
        n += n
        if (n % 2 === 0) return n
    }
};