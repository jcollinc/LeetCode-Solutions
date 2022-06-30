/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b)
    let mid = (nums[Math.floor(nums.length / 2)]) 
    let res = 0
    
    for (let num of nums) {
        res += Math.abs(num - mid)
    }
    
    return res
};