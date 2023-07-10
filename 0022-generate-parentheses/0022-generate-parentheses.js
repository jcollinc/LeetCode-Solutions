/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let validParens = []
    function dfs(string, left, right) {
        if (string.length === n * 2) validParens.push(string)
        if (left > 0) dfs(string + '(', left - 1, right)
        if (right > 0 && right > left) dfs(string + ')', left, right - 1)
    }
    dfs("", n, n)
    return validParens
};