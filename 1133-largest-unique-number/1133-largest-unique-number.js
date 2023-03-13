/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let numCounts = new Map(), max = -1
    for (let num of nums) {
        numCounts.set(num, 1 + (numCounts.get(num) || 0))
    }
    for (let [num, count] of numCounts) {
        if (count === 1) max = Math.max(num, max)
    }
    return max
};