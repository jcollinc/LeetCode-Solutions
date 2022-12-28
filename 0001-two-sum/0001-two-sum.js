/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        let lookup = target - nums[i]
        if (map.get(lookup) && map.get(lookup) !== i) {
            return [map.get(lookup), i]
        }
    }
};