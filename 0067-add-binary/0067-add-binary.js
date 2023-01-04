/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    let len = Math.max(a.length, b.length)
    let result = []
    for (let i = 0; i < len; i++) {
        num1 = Number(a[i] || 0)
        num2 = Number(b[i] || 0)
        sum = (result[i] || 0) + num1 + num2
        if (sum >= 2) {
            result[i] = sum % 2
            result.push(1)
        } else {
            result[i] = sum
        }
    }
    return result.reverse().join("")
};