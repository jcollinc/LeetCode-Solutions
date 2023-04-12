/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let keysMap = new Map(), moveCount = 0
    for (let i = 0; i < 26; i++) {
        keysMap.set(keyboard[i], i)
    }
    let idx = 0
    for (let char of word) {
        moveCount += (Math.abs(idx - keysMap.get(char)))
        idx = keysMap.get(char)
    }
    return moveCount
};