/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    return helper(s, true) || helper(s, false)
};

function helper (s, side) {
    let left = 0, right = s.length - 1
    let mismatch = 0
    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else {
            mismatch++
            side ? left++ : right--
        }
    }
    return mismatch <= 1
}
