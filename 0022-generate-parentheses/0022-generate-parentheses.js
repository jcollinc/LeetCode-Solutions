/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let validParens = []
    function dfs(string, leftCount, rightCount) {
        if (string.length === n * 2) {
            validParens.push(string.join(""))
            return
        }
        if (leftCount < n) {
            string.push("(")
            dfs(string, leftCount+1, rightCount)
            string.pop()
        } 
        if (rightCount < leftCount) {
            string.push(")")
            dfs(string, leftCount, rightCount+1)
            string.pop()
        }
    }
    dfs([], 0, 0)
    return validParens
};