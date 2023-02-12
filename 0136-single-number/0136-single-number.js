/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numCounts = new Map()
    for (let num of nums) {
        numCounts.set(num, 1 + (numCounts.get(num) || 0))
    }
    for (let [num, count] of numCounts) {
        if (count === 1) return num
    }
};