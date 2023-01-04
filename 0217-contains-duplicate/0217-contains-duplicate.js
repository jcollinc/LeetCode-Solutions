/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numSet = new Set(nums)
    return numSet.size < nums.length
};