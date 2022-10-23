/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length, dup, sum = n * (n + 1) / 2,
        seen = new Uint8Array(n+1)
    for (let i = 0; i < n; i++) {
        let num = nums[i]
        sum -= num
        if (seen[num]) dup = num
        seen[num]++
    }
    return [dup, sum + dup]
};