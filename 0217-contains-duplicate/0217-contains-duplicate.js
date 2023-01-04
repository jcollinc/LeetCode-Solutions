/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numMap = {}
    for (let num of nums) {
        if (numMap[num]) return true
        numMap[num] = true
    }
    return false
};