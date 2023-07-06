/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var combinationSum = function(candidates, target) {
    
    let output = []
    
    function dfs (array = [], idx = 0, sum = 0) {
        if (sum > target) return
        if (sum === target) output.push(array)
        
        for (let i = idx; i < candidates.length; i++) {
            dfs([...array, candidates[i]], i, sum + candidates[i])
        }
    }
    dfs()
    return output
};