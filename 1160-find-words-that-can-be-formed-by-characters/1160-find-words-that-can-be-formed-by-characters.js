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
        let count = new Map(), filled = 0
        for (let char of word) {
            count.set(char, 1 + count.get(char) || 0)
            if (charMap.has(char) && charMap.get(char) > count.get(char)) {
                filled++
                if (filled === word.length) res += word.length
            } else break
        }
    }
    return res
};