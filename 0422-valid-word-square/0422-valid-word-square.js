/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i], compare = ""
        for (let j = 0; j < words.length && words[j][i]; j++) {
            compare += words[j][i]
        }
        if (word !== compare) return false
    }
    return true
};