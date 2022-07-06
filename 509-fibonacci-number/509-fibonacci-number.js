/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let current = 0
    let previous = 1

    for (let i = 0; i < n; i++) {
        current = current + previous
        previous = current - previous
    }   

    return current
};

