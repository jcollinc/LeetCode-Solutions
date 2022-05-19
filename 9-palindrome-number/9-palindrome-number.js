/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = x.toString().split("").reverse().join("")
    if (x.toString() === rev) {
        return true
    }
    return false
};