/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let test = s
    for (let end = 1; end <= s.length / 2; end++) {
        let candidate = test.slice(0, end)
        while (candidate === test.slice(test.length-end)) {
            test = test.slice(0, test.length-end)
            if (test.length <= 0) return true
        }
        test = s
    }
    return false
};