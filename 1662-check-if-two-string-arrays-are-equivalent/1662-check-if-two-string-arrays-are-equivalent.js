/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let [pword1, pword2, pchar1, pchar2] = [0,0,0,0]
    while (pword1 < word1.length && pword2 < word2.length) {
        if (word1[pword1][pchar1] !== word2[pword2][pchar2]) return false
        else pchar1++, pchar2++
        if (pchar1 >= word1[pword1].length) {
            pword1++, pchar1 = 0
        } if (pchar2 >= word2[pword2].length) {
            pword2++, pchar2 = 0
        }
    }
    return pword1 === word1.length && pword2 === word2.length
};