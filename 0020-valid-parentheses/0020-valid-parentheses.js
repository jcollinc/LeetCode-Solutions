/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let dict = new Map([["(", ")"], ["{", "}"], ["[", "]"]])
    for (let char of s) {
        if (dict.has(char)) stack.push(dict.get(char))
        else if (char !== stack.pop()) return false
    }
    return stack.length === 0
};