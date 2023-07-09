/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0, rCount = 0, lCount = 0
    for (let char of s) {
        if (char === "R") rCount++
        else if (char === "L") lCount++
        if (rCount === lCount && rCount > 0) {
            res++, rCount = 0, lCount = 0
        }
    }
    return res
};