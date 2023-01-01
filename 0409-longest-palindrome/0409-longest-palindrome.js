/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return 1
    let longest = 0
    let stringMap = {}
    for (let char of s) {
        stringMap[char] = stringMap[char] + 1 || 1
        if (stringMap[char] % 2 === 0) longest += 2
    }
    return longest < s.length ? longest + 1 : longest
};