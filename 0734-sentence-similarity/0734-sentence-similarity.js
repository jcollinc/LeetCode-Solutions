/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    let len1 = sentence1.length, len2 = sentence2.length
    if (len1 !== len2) return false
    let pairsSet = new Set()
    for (let pair of similarPairs) {
        pairsSet.add(`${pair[0]}, ${pair[1]}`)
        pairsSet.add(`${pair[1]}, ${pair[0]}`)
    }
    for (let i = 0; i < len1; i++) {
        let [str1, str2] = [sentence1[i], sentence2[i]]
        if (!pairsSet.has(`${str1}, ${str2}`) && str1 !== str2) return false 
    }
    return true
};