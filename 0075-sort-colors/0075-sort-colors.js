/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1, curr = 0
    while (curr <= right) {
        if (nums[curr] === 0) {
            [nums[curr], nums[left]] = [nums[left], nums[curr]]
            left++
            curr++
        } else if (nums[curr] === 2) {
            [nums[curr], nums[right]] = [nums[right], nums[curr]]
            right--
        } else {
            curr++
        }
    }
    return nums
};