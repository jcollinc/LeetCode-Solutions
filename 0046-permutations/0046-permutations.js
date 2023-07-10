/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    function dfs(path, seen) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(i)) continue
            seen.add(i)
            path.push(nums[i])
            dfs(path, seen)
            path.pop()
            seen.delete(i)
        }
    }
    dfs([], new Set());
    return res;
}

