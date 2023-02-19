/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    
    // Return if sentences are unequal length
    
    if (sentence1.length !== sentence2.length) return false
    
    // Populate a set with string version of similar pairs for constant time lookup and quick comparison: cannot directly compare two arrays
    
    let pairsSet = new Set()
    for (let pair of similarPairs) {
        pairsSet.add(`${pair[0]}, ${pair[1]}`)
    }
    
    // Iterate through sentences; check pairsSet for both versions of string as order is unknown, and make sure words are not equal, because if so they are automatically similar
    
    for (let i = 0; i < sentence1.length; i++) {
        let [str1, str2] = [sentence1[i], sentence2[i]]
        if (!pairsSet.has(`${str1}, ${str2}`) && !pairsSet.has(`${str2}, ${str1}`) && str1 !== str2) return false 
    }
    
    // If loop is exited, all pairs satisfy the above conditions; return true
    
    return true
    
};