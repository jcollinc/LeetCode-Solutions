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
    if (JSON.stringify([...Object.keys(charFreq1)].sort()) !== JSON.stringify([...Object.keys(charFreq2)].sort())) return false
    if (JSON.stringify([...Object.values(charFreq1)].sort()) !== JSON.stringify([...Object.values(charFreq2)].sort())) return false  
    return true
};