/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums.slice(i+1).includes(target - nums[i])) return [i, nums.slice(i+1).indexOf(target - nums[i]) + (i + 1)]
    }
};