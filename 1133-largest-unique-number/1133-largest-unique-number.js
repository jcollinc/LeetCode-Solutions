/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    nums.sort((a,b) => b - a) 
    let seen = new Set()
    let max = -1
    for (let num of nums) {
        if (!seen.has(num)) max = Math.max(max, num)
        else if (seen.has(num) && num >= max) max = -1
        seen.add(num)
    }
    return max
};