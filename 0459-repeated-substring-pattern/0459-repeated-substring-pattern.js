/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let left = 0, right = 1
    while (right < s.length) {
        let candidate = s.slice(left,right), idx = 0, len = right - left
        while (candidate === s.slice(idx, idx + len)) {
            idx += len
            if (idx >= s.length) return true
        }
        right++
        len++
    }
    return false
};