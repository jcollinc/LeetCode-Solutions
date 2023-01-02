/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let [x, y, z] = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        let newVal = x + y + z
        x = y
        y = z
        z = newVal
    }
    return n ? z : 0
};