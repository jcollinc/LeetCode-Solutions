/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let validPerm = []
    function dfs(possiblePerm, seen) {
        if (nums.length === possiblePerm.length) {
            validPerm.push([...possiblePerm])
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(i)) continue
            possiblePerm.push(nums[i])
            seen.add(i)
            dfs(possiblePerm, seen)
            possiblePerm.pop()
            seen.delete(i)
        }
    }
    dfs([], new Set())
    return validPerm
}

