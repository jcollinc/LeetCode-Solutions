/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let tribVals = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        let newVal = (tribVals[0] + tribVals[1] + tribVals[2])
        tribVals[0] = tribVals[1]
        tribVals[1] = tribVals[2]
        tribVals[2] = newVal  
    }
    return n > 2 ? tribVals[2] : tribVals[n]
};