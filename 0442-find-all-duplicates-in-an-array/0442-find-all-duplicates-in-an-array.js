/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let countMap = new Map()
    let res = []
    for (let num of nums) {
        countMap.has(num) ? res.push(num) : countMap.set(num, 1)
    }
    return res
};