/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0
    
    let fib = [0, 1]
    
    for (let i = 2; fib.length <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2])        
    }   
    return fib[n]
};