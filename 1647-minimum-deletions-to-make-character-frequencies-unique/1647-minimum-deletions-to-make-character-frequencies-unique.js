/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    if (s.length === 1) return 0
    let res = 0
    let counts = {}
    for (let char of s) {
        if (counts[char]) counts[char]++
        else counts[char] = 1
    }
    let freq = Object.values(counts)
    freq.sort((a, b) => b - a)
    let max = freq[0]
    for (let i = 1; i < freq.length; i++) {
        if (max === 0) {
            res += freq[i]
            freq[i] = 0
        }
        else if (freq[i] >= max) {
            res += freq[i] - max + 1
            freq[i] = max - 1
        }
        max = freq[i]
    }
    return res
};