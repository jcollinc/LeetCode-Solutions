/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    
    if (word.length <= 1) return true

    if (word[0].toUpperCase() !== word[0]) {
        for (let char of word) {
            if (char !== char.toLowerCase()) return false
        }
    } else {
        if (word[1].toUpperCase() !== word[1]) {
            for (let i = 1; i < word.length; i++) {
                if (word[i] !== word[i].toLowerCase()) return false
            }
        }
        else {
            for (let char of word) {
                if (char.toUpperCase() !== char) return false
            }
        }
            
    }
    return true
};