/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let tribVals = [0, 1, 1]
    for (let i = 3; i <=n; i++) {
        tribVals[i] = tribVals[i-3] + tribVals[i-2] + tribVals[i-1]
    }
    return tribVals[n]
};