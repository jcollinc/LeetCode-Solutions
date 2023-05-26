/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = []
    for (let i = 0; i < nums.length; i++) {
        let idx = index[i], num = nums[i]
        target[idx] >= 0 ? target.splice(idx, 0, num) : target[idx] = num
    }
    return target
};