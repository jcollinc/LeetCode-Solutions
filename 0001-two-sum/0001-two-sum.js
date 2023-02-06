/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            return [numsMap.get(nums[i]), i]
        } 
        else numsMap.set(target - nums[i], i)
    }
};
