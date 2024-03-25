/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let numSet = new Set(), res = []
    for (let num of nums) {
        numSet.has(num) ? res.push(num) : numSet.add(num)
    }
    return res
};