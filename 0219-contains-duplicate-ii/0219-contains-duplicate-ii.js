/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const numsMap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        if (idx - numsMap.get(nums[idx]) <= k) {
            return true;
        }
        numsMap.set(nums[idx], idx);
    }
    return false;
};