/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = Infinity, maxDif = -1
    for (let num of nums) {
        min = Math.min(num, min)
        maxDif = num - min > 0 ? Math.max(maxDif, num - min) : maxDif
    }
    return maxDif
};