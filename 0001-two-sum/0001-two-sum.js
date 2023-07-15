/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let candidates = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (candidates.has(nums[i])) return [candidates.get(nums[i]), i]
        else candidates.set(target - nums[i], i)
    }
    return
};