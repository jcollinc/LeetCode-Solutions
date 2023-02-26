/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if (!s.length) return t
    let sMap = new Map()
    for (let char of s) {
        sMap.set(char, 1 + (sMap.get(char) || 0))
    }
    console.log(sMap)
    for (let char of t) {
        if (!sMap.has(char) || sMap.get(char) === 0) return char
        else (sMap.set(char, sMap.get(char) - 1))
    }
};