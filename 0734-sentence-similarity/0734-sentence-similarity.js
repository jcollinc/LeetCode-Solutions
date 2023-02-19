/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false
    let pairsSet = new Set()
    for (let pair of similarPairs) {
        pairsSet.add(`${pair[0]}, ${pair[1]}`)
    }
    for (let i = 0; i < sentence1.length; i++) {
        let [str1, str2] = [sentence1[i], sentence2[i]]
        if (!pairsSet.has(`${str1}, ${str2}`) && !pairsSet.has(`${str2}, ${str1}`) && str1 !== str2) return false 
    }
    return true
};