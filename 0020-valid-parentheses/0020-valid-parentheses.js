/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    let validParens = {"(":")", "[":"]", "{":"}"}
    let stack = []
    for (let char of s) {
        if (validParens[char]) {
            stack.push(validParens[char])
        } else if (stack.pop() !== char) {
            return false
        }
    }
    return (!stack.length)
};