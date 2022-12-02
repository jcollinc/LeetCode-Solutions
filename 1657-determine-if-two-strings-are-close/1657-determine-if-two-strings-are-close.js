/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false
    let charFreq1 = {}, charFreq2 = {}
    for (let char of word1) {
        charFreq1[char] = charFreq1[char] ? charFreq1[char] + 1 : 1
    }
    for (let char of word2) {
        charFreq2[char] = charFreq2[char] ? charFreq2[char] + 1 : 1
    }
    let idx = 0
    for (let char of Object.keys(charFreq1).sort()) {
        if (char !== Object.keys(charFreq2).sort()[idx]) return false
        idx++
    }
    idx = 0
    for (let char of Object.values(charFreq1).sort()) {
        if (char !== Object.values(charFreq2).sort()[idx]) return false
        idx++
    }
    return true
};