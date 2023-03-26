/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let vowels = new Set(["a","e","i","o","u"])
    let res = ""
    for (let char of s) {
        if (!vowels.has(char)) res += char
    }
    return res
};