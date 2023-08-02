/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let permutations = [], n = nums.length
    function getPermutations(curr, seen) {
        if (curr.length === n) {
            permutations.push([...curr])
            return
        }
        for (let i = 0; i < n; i++) {
            if (seen.has(i)) continue
            curr.push(nums[i])
            seen.add(i)
            getPermutations([...curr], new Set(seen))
            curr.pop()
            seen.delete(i)
        }
    }
    getPermutations([], new Set())
    return permutations
};