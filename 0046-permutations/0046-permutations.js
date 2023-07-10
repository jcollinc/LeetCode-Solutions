/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    function dfs(nums, path, used) {
        if (path.length == nums.length) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            // skip used nums
            if (used[i]) continue;
            // add letter to permutation, mark letter as used
            path.push(nums[i]);
            used[i] = true;
            dfs(nums, path, used);
            // remove letter from permutation, mark letter as unused
            path.pop();
            used[i] = false;
        }
    }
    dfs(nums, [], Array(nums.length).fill(false));
    return res;
}

