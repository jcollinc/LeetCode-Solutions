/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let zeroCount = 0
    for (let c of s) {
        if (c === "0") {
            zeroCount++
        }
    }
    let res = zeroCount
    for (let c of s) {
        if (c === "0") {
            zeroCount--
            res = Math.min(zeroCount, res)
        } else {
            zeroCount++
        }
    }
    return res
};