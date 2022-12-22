/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p1 = 0, p2 = nums.length - 1, current = 0
    while (current <= p2) {
        if (nums[current] === 0) {
            [nums[p1], nums[current]] = [nums[current], nums[p1]]
            p1++
            current++
        } else if (nums[current] === 2) {
            [nums[p2], nums[current]] = [nums[current], nums[p2]]
            p2--
        } else current++   
    }
    return nums
};