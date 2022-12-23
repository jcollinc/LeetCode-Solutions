/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let current = 0, left = 0, right = nums.length - 1
    while (current <= right) {
        if (nums[current] === 0) {
            [nums[left], nums[current]] = [nums[current], nums[left]]
            current++
            left++
        } else if (nums[current] === 2) {
            [nums[right], nums[current]] = [nums[current], nums[right]]
            right--
        } else {
            current++
        }
    }
};