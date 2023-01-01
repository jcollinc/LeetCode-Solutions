/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let mapA = {}
    let mapB = {}
    let words = s.split(" ")
    if (pattern.length !== words.length) return false
    for (let i = 0; i < words.length; i++) {
        if (mapA[pattern[i]] && mapA[pattern[i]] !== words[i] ||
            mapB[words[i]] && mapB[words[i]] !== pattern[i]) return false
        mapA[pattern[i]] = words[i]
        mapB[words[i]] = pattern[i]
    }
    return true
};