/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = Infinity, maxDif = -1
    for (let num of nums) {
        min = Math.min(num, min)
        if (num - min > 0) maxDif = Math.max(maxDif, num - min) 
    }
    return maxDif
};