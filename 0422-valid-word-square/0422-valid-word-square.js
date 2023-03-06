/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        for (let j = 0; j < word.length; j++) {
            if (!words[j] || word[j] !== words[j][i]) return false
        }
    }
    return true
};