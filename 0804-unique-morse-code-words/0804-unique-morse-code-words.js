/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("").reverse()
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let morseMap = new Map()
    for (let letter of alphabet) {
        morseMap.set(letter, morse.pop())
    }
    let seen = new Set()
    for (let word of words) {
        let code = ""
        for (let letter of word) {
            code += morseMap.get(letter)
        }
        seen.add(code)
    }
    return seen.size
};