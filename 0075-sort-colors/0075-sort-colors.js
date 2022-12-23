/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, curr = 0, right = nums.length - 1
    while (curr <= right) {
        if (nums[curr] === 0) {
            [nums[curr], nums[left]] = [nums[left], nums[curr]]
            curr++
            left++
        } else if (nums[curr] === 1) {
            curr++ 
        } else {
            [nums[curr], nums[right]] = [nums[right], nums[curr]]
            right--
        }
    }
    return nums
};
    
