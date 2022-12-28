/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let mapS = {}
    for (let char of s) {
        mapS[char] = (mapS[char] || 0) + 1
    }
    for (let char of t) {
        if (!mapS[char]) return false
        mapS[char]--
    }
    return true
};