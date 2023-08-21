/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;
    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const repeatCount = n / len;
            const substring = s.slice(0, len);
            if (substring.repeat(repeatCount) === s) {
                return true;
            }
        }
    }
    return false;
};