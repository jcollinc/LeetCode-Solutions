/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return 1
    let longest = 0
    let stringMap = {}
    let oneCount = false
    for (let char of s) {
        stringMap[char] = stringMap[char] + 1 || 1
    }
    for (let count of Object.values(stringMap)) {
        if (count % 2 === 0) longest += count
        else longest += count - 1, oneCount = true
    }
    if (oneCount) longest += 1
    return longest
};