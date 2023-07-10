/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var combinationSum = function(candidates, target) {
    let validCombos = []
    function dfs(combo, sum, idx) {
        if (sum > target) {
            return
        }else if (sum === target) {
            validCombos.push([...combo])
            return
        }
        for (let i = idx; i < candidates.length; i++) {
            combo.push(candidates[i])
            sum += candidates[i]
            dfs(combo, sum, i)
            sum -= combo.pop()
        }
    }
    dfs([], 0, 0)
    return validCombos
};