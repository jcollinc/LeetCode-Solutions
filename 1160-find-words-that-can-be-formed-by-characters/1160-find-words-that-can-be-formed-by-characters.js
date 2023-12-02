/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charMap = new Map()
    let res = 0
    for (let char of chars) {
        charMap.set(char, 1 + (charMap.get(char) || 0))
    }
    for (let word of words) {
    let mapCopy = new Map(charMap)
        for (let char = 0; char < word.length; char++) {
            if (mapCopy.get(word[char]) > 0) {
                mapCopy.set(word[char], mapCopy.get(word[char]) - 1)
            } else break
            if (char === word.length-1) res += word.length, console.log(word)
        }
    }
    return res
};